import * as needle from "needle"
import { filter, without } from "underscore"
import * as fs from "fs"
import * as moment from "moment"
import * as glob from "glob-promise"

export default async function testRailSubmit(results, config) {
    if (!config || !config.testRail) {
        console.log("--------------------------------------------------------------------------------------------------------")
        console.log("| Results cannot be submited to TestRail due to no TestRail configuration being found.                 |")
        console.log("| Read here: https://classlink.atlassian.net/wiki/spaces/QT/pages/1839038571/TestRail+Plugin  |")
        console.log("--------------------------------------------------------------------------------------------------------")
        return
    }
    else {
        let lastError = "There was no last error, yell at Juan"
        const logs = { report: "", errors: [] } as { report: any, errors: any[] }

        const transformResult = function (test) {
            try {
                const result = {} as { case_id: number, status_id: number, comment: string, elapsed: string }
                const rgx = new RegExp(`((?<=${config.testRail.runName}-C)[0-9]*(?=[ ]*(:|\\|))|(?<=C)(?<!\\|.*)[0-9]*(?=[ ]*:)(?!.*\\|))`)
                result.case_id = test.title[test.title.length - 1].match(rgx)[0]
                result.status_id = test.state === "passed" ? 1 : (test.state === "failed" ? 5 : 4)
                if (test.attempts[test.attempts.length - 1].timings && test.attempts[test.attempts.length - 1].timings.fnDuration)
                    result.elapsed = test.attempts[test.attempts.length - 1].timings.test.fnDuration / 1000 + " s"
                if (result.status_id === 5) {
                    lastError = test.displayError
                    result.comment = lastError
                }
                else if (result.status_id === 4) result.comment = "Skipped due to previous error. Error might be but it's not guaranteed to be the following \n" + lastError
                else result.comment = "Test result marked by Cypress"
                return result
            }
            catch (error) {
                const log = {
                    test: {
                        testId: test.testId,
                        title: test.title,
                        state: test.state
                    },
                    error: error.toString()
                }
                logs.errors.push(log)
            }

        }

        const recordResults = async function (data: any[]) {
            if (data.length === 0) {
                fs.writeFileSync(`./logs/${moment().format("YYYYMMDD_HHmm")}log.json`, JSON.stringify(logs, null, 2))
                return
            }
            return needle("post", `${config.testRail.url}/index.php?/api/v2/add_results_for_cases/${config.testRail.runId}`, {
                results: data
            }, {
                headers: {
                    Authorization: "Basic " + config.testRail.auth,
                    "Content-Type": "application/json"
                }
            })
                .then((res) => {
                    console.log("done ", res.statusCode)
                    if (res.statusCode === 400 && res.body.error.indexOf("Field :results contains one or more invalid results") > -1) {
                        logs.errors.push(res.body)
                        return recordResults(filter(data, (test) => test.case_id !== res.body.error.match(/(?<=C)[0-9]*(?= u)/)[0]))
                    }
                    else if (res.statusCode !== 200) {
                        logs.errors.push(res.body)
                        logs.report = data
                        fs.writeFileSync(`./logs/${moment().format("YYYYMMDD_HHmm")}log.json`, JSON.stringify(logs, null, 2))
                        return
                    }
                    else {
                        logs.report = res.body
                        for (let i = 0; i < res.body.length; i++) {
                            data[i].resultId = res.body[i].id
                        }
                        fs.writeFileSync(`./logs/${moment().format("YYYYMMDD_HHmm")}log.json`, JSON.stringify(logs, null, 2))
                        return addAttachments(data)
                    }
                })
        }

        const addAttachments = function (data) {
            data = filter(data, (test) => test.status_id === 5)

            if (data.length > 0) {
                const promises = []
                for (let i = 0; i < data.length; i++) {
                    promises.push(new Promise((resolve) => {
                        glob(`./cypress/screenshots/*/*C${data[i].case_id}*.png`)
                            .then(match => {
                                if (match.length > 0) {
                                    needle("post", `${config.testRail.url}/index.php?/api/v2/add_attachment_to_result/${data[i].resultId}`, { attachment: fs.readFileSync(match[0]) }, {
                                        multipart: true,
                                        headers: {
                                            Authorization: "Basic " + config.testRail.auth,
                                            "Content-Type": "multipart/form-data"
                                        }
                                    })
                                        .then((res) => {
                                            resolve({ statusCode: res.statusCode, body: res.body })
                                        })
                                }
                                else resolve("No screenshot for test case C" + data[i].case_id)
                            })
                    }))
                }

                return Promise.all(promises).then(responses => {
                    console.log(responses)
                    return
                })
            }
            else console.log("No failures. Skipping adding attachments")
        }

        const testSummary = []

        for (const test of results.tests) {
            if (test.state !== "pending") testSummary.push(transformResult(test))
        }

        return await recordResults(without(testSummary, undefined))
    }
}