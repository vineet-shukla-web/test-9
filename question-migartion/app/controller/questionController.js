var questionModel = require('../model/questionModel.js');
var tagModel = require('../model/tagModel.js');
var con = require('../model/mongodb.js');
const MongoClient = con.MongoClient;
var customJs = require('../model/custom.js');

exports.allQuestionMasterList = async function (req, res) {
    start = 0;
    limit = 1;
    const questionType = req.params.questiontype;
    if (req.params.start) {
        start = req.params.start;
    }
    if (req.params.limit) {
        limit = req.params.limit;
    }
    try {
        finalArray = [];
        const question = await questionModel.getAllQuestion(questionType, start, limit);

        try {
            if (question) {
                for (let element of question) {

                    const questionAdditionalData = await questionModel.getQuestionAdditionalInformation(element.question_id);
                    var repositoryNameString = customJs.manageRepositoryNameString(questionAdditionalData);

                    /******************difficulty_level_range Section: Start***************************/
                    var difficultyLevelRange = '';
                    const quesTagDataArray = await questionModel.getQuestionTagInformation(element.question_id);

                    if (quesTagDataArray) {
                        for (let quesTagData of quesTagDataArray) {
                            if (quesTagData.tag_name == 'difficulty_level_range') {
                                difficultyLevelRange = quesTagData.tag_value;
                            }
                        }
                    }
                    /*****************difficulty_level_range Section : End***************************/



                    var questionLangBasedDetailDataArray = await questionModel.getQuestionLanguageBasedData(element.question_id);

                    /******************Subjective/Objective Section : Start********************/

                    //To get question's answer
                    if (questionType == 1 || questionType == 2) {

                        const getAnswerOptionsOfQuestion = await questionModel.getAnswerOptionsOfQuestion(element.question_id);
                        var questionLangBasedDetailDataArray = customJs.manageLangBasedSubDetail(element, questionLangBasedDetailDataArray, getAnswerOptionsOfQuestion);


                    }
                    /******************Subjective/Objective Section : End********************/

                    /******************Paragraph Section : Start*******************************/
                    //To get question child whether type is paragraph
                    var questionDetailData = [];
                    var questionDetailData = questionLangBasedDetailDataArray;
                    if (questionType == 3) {

                        var questionDetailData = [];
                        questionDetailData = await questionModel.getPargraphChildQuestionData(element, questionLangBasedDetailDataArray);

                    }
                    /******************Paragraph Section : Start************************/
                    var questionKeywords = [];
                    if (element.question_keywords != '') {
                        questionKeywords = element.question_keywords.split(',');
                    }
                    var serviceIds = [];
                    if (element.service_id != null) {
                        serviceIds.push(element.service_id);
                    }
                    var containerId = [];
                    if (element.container_id != null) {
                        containerId.push(element.container_id);
                    }

                    finalArray.push({
                        question_id: element.question_id,
                        //ai_template_id: '',
                        question_template_id: element.template_id, //
                        school_id: 1, //element.school_id,
                        version: 'V.0000',
                        question_type_id: element.question_type_master_id,
                        question_keywords: questionKeywords,
                        difficulty_level_range: difficultyLevelRange,
                        repository_type: repositoryNameString,
                        container_id: containerId,
                        repository_service_id: serviceIds, //
                        //parent_question_id: element.parent_question_id,
                        //marks: element.ques_marks,
                        //course_flag: element.ques_flag, //
                        //status_master_id: element.status_master_id,
                        stage: element.action, 
                        status: element.status, 
                        imported_from: [],
                        created_by: element.user_id,
                        created_date: customJs.toTimestamp(element.creation_date),
                        updated_by: element.user_id,
                        updated_date: customJs.toTimestamp(element.updation_date),
                        default_marks: element.ques_marks,
                        default_difficulty_level_id: element.difficulty_master_id,
                        //allowed_time: element.allowed_time,
                        //service_name: element.service_name, //
//                        question_tag: questionTagData,
//                        board_level_data:questionBoardLevelData,
                        question_data: questionDetailData
                    });
                }

            }

            //MongoDb Connection
            //var dataObj=     JSON.stringify(finalArray);       
            //var dbo = MongoClient.db(con.dbName);
            //dbo.collection("question_master").deleteMany();
//            dbo.collection("question_master").insertMany(finalArray, function (err, res) {
//                    if (err) throw err;
//                    console.log("Data inserted!")
//             });

            res.status(200).send(finalArray);
        } catch (e) {
            res.status(400).send(e);
        }

    } catch (e) {
        res.status(400).send(e);
    }
};


exports.allQuestionMappingData = async function (req, res) {
    start = 0;
    limit = 1;
    const questionType = req.params.questiontype;
    if (req.params.start) {
        start = req.params.start;
    }
    if (req.params.limit) {
        limit = req.params.limit;
    }
    try {
        finalArray = [];
        const question = await questionModel.getAllQuestion(questionType, start, limit);

        try {
            if (question) {
                for (let element of question) {

                    /******************Disable Tag Code Section: Start***************************/
//                    var difficultyLevelRange = '';
                    const quesTagDataArray = await questionModel.getQuestionTagInformation(element.question_id);
                    var questionTagData = [];
                    if (quesTagDataArray) {
                        for (let quesTagData of quesTagDataArray) {


                            //To check whether tag_master is exist
                            const getTagMasterData = []; //await tagModel.getTagMasterData(quesTagData.tag_name, quesTagData.tag_value);
                            if (getTagMasterData.length) {

//                                getTagMasterData.map((data) => {
//                                    questionTagData.push({
//                                        tag_id: data.tag_id,
//                                        tag_name: data.tag_name,
//                                        tag_value_id: data.tag_value_id,
//                                        tag_value: data.tag_value
//                                    });
//                                });
                            } else {
                                //record is not inserted due to permission
//                                const getTagMasterIds = await tagModel.saveTagMasterData(quesTagData.tag_name, quesTagData.tag_value);
//                                if(getTagMasterIds.length){
//                                    questionTagData.push({
//                                        tag_id: getTagMasterIds[0],
//                                        tag_name: quesTagData.tag_name,
//                                        //tag_value_id: getTagMasterIds[1] || 0,
//                                        tag_value: quesTagData.tag_value
//                                    });
//                                }

                            }


                        }
                    }
                    /******************Disable Tag Code Section : End***************************/

                    const questionBoardLevelData = await questionModel.questionBoardLevelData(element.question_id);

                    finalArray.push({

                        question_id: element.question_id,

                        question_tag: questionTagData,
                        board_level_data: questionBoardLevelData,
                    });
                }

            }

            //MongoDb Connection
            //var dataObj=     JSON.stringify(finalArray);       
            //var dbo = MongoClient.db(con.dbName);
            //dbo.collection("question_master").deleteMany();
//            dbo.collection("question_master").insertMany(finalArray, function (err, res) {
//                    if (err) throw err;
//                    console.log("Data inserted!")
//             });

            res.status(200).send(finalArray);
        } catch (e) {
            res.status(400).send(e);
        }

    } catch (e) {
        res.status(400).send(e);
    }
};
