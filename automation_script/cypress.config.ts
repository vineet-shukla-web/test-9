import { defineConfig } from 'cypress'
import testRailSubmit from "./testRail"

module.exports = defineConfig({
  "chromeWebSecurity": false,
  "defaultCommandTimeout": 10000,
  "requestTimeout": 30000,
  "watchForFileChanges": false,
  "experimentalInteractiveRunEvents": true,
  "viewportWidth": 1900,
  "viewportHeight": 1000,
  "env": {
    customURL: "notqa2",
    schoolCode: "qa2",
    password: "Buy@V3st",
    tenantId: {
      beta: 490,
      staging: 1051,
      prod: 1051
    },
    buildingId: {
      beta: 1036,
      staging: 4829,
      prod: 4829
    }
  },
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.spec.ts",
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {

      if (config.isTextTerminal) {
        on("after:spec", async (spec, results) => {
          return testRailSubmit(results, config.env)
        })
      }

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // Mac/Linux
          // launchOptions.args.push(
          //     '--use-file-for-fake-video-capture=cypress/fixtures/my-video.y4m'
          // )

          // Windows
          launchOptions.args.push('--use-fake-ui-for-media-stream')
          launchOptions.args.push('--use-fake-device-for-media-stream')
          launchOptions.args.push(`--use-file-for-fake-video-capture=${process.env.npm_config_local_prefix}\\cypress\\fixtures\\my-video.y4m`)
        }
        return launchOptions
      })



      const environment = config.env.ENV ? (config.env.ENV === 'prod' ? '' : config.env.ENV) : ''

      config.env.loginPage = `https://${environment === 'staging' ? "stagingclouddesktop" : environment + "launchpad"}.classlink.com`
      config.env.customLoginPage = `${config.env.loginPage}/${config.env.customURL}`
      config.env.tmsAPI = `https://tenant-management-service${environment ? "-" + environment : ''}.classlink.io`
      config.env.nodeAPI = `https://${environment}nodeapi.classlink.com`
      config.env.analyticsAPI = `https://analytics-data${environment ? "-" + environment : ''}.classlink.io`

      return config
    },
  },
});
