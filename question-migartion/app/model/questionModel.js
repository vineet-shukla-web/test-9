
var sql = require('./db.js');
//var MongoClient = require('./mongodb.js');
//var custom = require('./custom.js');
const {QueryTypes} = require('sequelize');
var customJsModel = require('./custom.js');

//var url = "mongodb://admin:root121@localhost:27017/nemr?authSource=admin";
//var url = "mongodb://dev_content:ghostDBadmin202139@65.0.109.13:17027/nemr_content?authSource=admin";

var questionModel = function (question) {};

questionModel.getAllQuestion = async function (questionType, start, limit) {
    try {

        //  LEFT JOIN services sev ON sev.service_id=qed.service_id AND sev.status=1 // sev.service_name,qed.service_id,
        sqlString = `SELECT que.question_id,que.question_keywords, que.question_type_master_id, que.parent_question_id,
                     que.ques_marks, que.difficulty_master_id, que.user_id,que.time_stamp,que.allowed_time,
                     qed.template_id,qed.modified_time , ql.action, nqai.status, 
                    nqai.ques_flag, mc.container_id, mc.creation_date, mc.updation_date, mc.container_id,  mc.service_id 
                    FROM questions que 
                    LEFT JOIN question_extra_detail qed ON qed.question_id=que.question_id 
                   
                    LEFT JOIN nemr_question_additional_information nqai ON nqai.question_id=que.question_id 
                    LEFT JOIN question_language ql ON ql.question_id=que.question_id 
                    LEFT JOIN content_question_media cqm ON cqm.question_id=que.question_id AND cqm.status=1 
                    LEFT JOIN main_content mc ON mc.content_id=cqm.content_id AND mc.status=1 
        
                    WHERE que.question_type_master_id=${questionType} AND que.parent_question_id = 0  
                        AND nqai.status=1 AND ql.action IN (1,2,3,10,11) AND ql.status=1 
                    GROUP BY nqai.question_id         
                    ORDER BY que.question_id DESC LIMIT  ${start}, ${limit}`;

        const res = await sql.query(sqlString, {type: QueryTypes.SELECT});
        return res;
    } catch (e) {
        throw new Error(e)
    }
}


questionModel.getQuestionAdditionalInformation = async function (questionId) {
    try {
        sqlString = `SELECT ran.name
                    FROM nemr_question_additional_information nqai 
                    LEFT JOIN rack_name ran ON ran.rack_name_id=nqai.exam_rack_id
                    WHERE ran.status=1 AND nqai.status=1 AND nqai.question_id = ${questionId}`;

        const res = await sql.query(sqlString, {type: QueryTypes.SELECT});

        return res;
    } catch (e) {
        throw new Error(e)
    }
}

questionModel.getQuestionLanguageBasedData = async function (questionId) {
    try {
        sqlString = `SELECT ql.id AS question_language_id,ql.language_id, ql.question AS question_text,ql.ques_instruction,
                    ql.question_teacher_desc AS question_teacher_description,ql.instruction_video,ql.question_video,
                    ql.explaination_hint_video,ql.answer_Ideal_Time AS answer_ideal_time,lm.language_name,
                    que.ques_marks, dm.difficulty_name, qtm.question_type, ql.question_id 
                    FROM question_language ql
                    LEFT JOIN language_master lm ON lm.language_id=ql.language_id 
                    LEFT JOIN questions que ON que.question_id=ql.question_id 
                    LEFT JOIN question_type_master qtm ON qtm.question_type_master_id=que.question_type_master_id AND qtm.active_status=1 
                    LEFT JOIN difficulty_master dm ON dm.difficulty_master_id=que.difficulty_master_id  AND dm.status='1' 
                    
                    WHERE ql.status='1' AND ql.question_id = ${questionId}`;
        const res = await sql.query(sqlString, {type: QueryTypes.SELECT});
        return res;
    } catch (e) {
        throw new Error(e)
    }
}

questionModel.getQuestionTagInformation = async function (questionId) {
    try {
        sqlString = `SELECT qt.id AS tag_id,qt.tagkey AS tag_name,qt.tagvalue AS tag_value
                    FROM question_tag qt 
                    WHERE qt.status=1 AND qt.question_id = ${questionId}`;
        const res = await sql.query(sqlString, {type: QueryTypes.SELECT});
        return res;
    } catch (e) {
        throw new Error(e)
    }
}


questionModel.getChildQuestionData = async function (questionId) {
    try {
        sqlString = `SELECT que.question_id
                    FROM questions que
                    WHERE que.parent_question_id = ${questionId}`;
        const res = await sql.query(sqlString, {type: QueryTypes.SELECT});
        return res;
    } catch (e) {
        throw new Error(e)
    }
}

questionModel.getAnswerOptionsOfQuestion = async function (questionId) {
    try {
        sqlString = `SELECT ans.answer_id, ans.status AS answer_status,null AS option_image, ans.answer AS answer_text,
                     ans.answer_order,aex.ans_explanation AS explanation_text,  
                    CASE
                        WHEN qa.question_answer_id > 0 THEN '1'
                        ELSE '0'
                    END  AS is_right,
                    CASE
                        WHEN qa.question_answer_id > 0 THEN qa.question_answer_id
                        ELSE '0'
                    END  AS right_answer_id
        
                    FROM answers ans
                    LEFT JOIN question_answer qa ON qa.answer_id=ans.answer_id
                    LEFT JOIN answer_explanation aex ON aex.answer_id=ans.answer_id
        
                    WHERE ans.status =1 AND ans.question_id = ${questionId}`;
        const res = await sql.query(sqlString, {type: QueryTypes.SELECT});
        return res;
    } catch (e) {
        throw new Error(e)
    }
}
questionModel.getPargraphChildQuestionData = async function (element, questionLangBasedDetailDataArray) {
    try {
        var questionId = element.question_id;
        var childManagingArray = [];
        var questionDetailData = [];
        const getChildQuestionData = await questionModel.getChildQuestionData(questionId);

        if (getChildQuestionData) {
            for (let getChildQuesData of getChildQuestionData) {
                const questionChildDetailDataArray = await questionModel.getQuestionLanguageBasedData(getChildQuesData.question_id);
                if (questionChildDetailDataArray.length) {
                    const getAnswerOptionsOfQuestion = await questionModel.getAnswerOptionsOfQuestion(getChildQuesData.question_id);
//que.ques_marks, que.difficulty_name, qtm.question_type
                    questionChildDetailDataArray.map((questionChildDetail) => {
                        childManagingArray.push({
                            question_id: getChildQuesData.question_id,
                            question_type: questionChildDetail.question_type,
                            difficulty_level: questionChildDetail.difficulty_name,
                            marks: questionChildDetail.ques_marks,
                            language_id: questionChildDetail.language_id,
                            question_text: questionChildDetail.question_text,
                            question_instruction: questionChildDetail.ques_instruction,
                            question_teacher_description: questionChildDetail.question_teacher_description,
                            instruction_video: questionChildDetail.instruction_video,
                            question_video: questionChildDetail.question_video,
                            explaination_hint_video: questionChildDetail.explaination_hint_video,
                            //answer_ideal_time: questionChildDetail.answer_ideal_time,
                            question_answer: getAnswerOptionsOfQuestion
                        });

                    });

                }

            }

        }

        if (questionLangBasedDetailDataArray.length) {
            var newArray = [];
            for (let questionLangBasedData of questionLangBasedDetailDataArray) {

                questionDetailData.push({
                    question_id: questionId,
                    question_template_id: element.template_id,
                    question_language_id: questionLangBasedData.question_language_id,
                    language_id: questionLangBasedData.language_id,
                    language_name: questionLangBasedData.language_name,
                    question_text: questionLangBasedData.question_text,
                    question_instruction: questionLangBasedData.ques_instruction,
                    question_teacher_description: questionLangBasedData.question_teacher_description,
                    instruction_video: questionLangBasedData.instruction_video,
                    question_video: questionLangBasedData.question_video,
                    explaination_hint_video: questionLangBasedData.explaination_hint_video,
                    answer_ideal_time: questionLangBasedData.answer_ideal_time,
                    stage: element.action,
                    status: element.status,
                    imported_from: [],
                    created_by: element.user_id,
                    created_date: customJsModel.toTimestamp(element.creation_date),
                    updated_by: element.user_id,
                    updated_date: customJsModel.toTimestamp(element.updation_date),
                    child_question: childManagingArray
                });
            }

        }

        return questionDetailData;
    } catch (e) {
        throw new Error(e)
    }
}

//=======get board level data====//
questionModel.questionBoardLevelData=async function (questionId){

    try{
        sqlString = `select t1.syllabus_id, cbr1.custom_board_rack_id, t1.custom_board_id, rr1.rack_type_id, t1.ques_marks,t1.difficulty_master_id,rr1.rack_name ,rt.type_name,t1.exam_rack_id,t1.content_id from (
            SELECT rbt.board_container_id, rbt.board_id, cqm.question_id, cbr.custom_board_id, SUBSTRING_INDEX(SUBSTRING_INDEX(concat(rr.parent_path, ',', rr.rack_id), ',', numbers.n), ',', -1) as syllabus_id, concat(rr.parent_path, ',', rr.rack_id) as parent_path,
            nqai.ques_marks,nqai.difficulty_master_id,nqai.exam_rack_id,cqm.content_id
            
            FROM question_language ql 
            join content_question_media cqm on cqm.question_id=ql.question_id and cqm.status=1
            join main_content mc on cqm.content_id=mc.content_id  and mc.status=1
            join repository_board_tagging rbt on rbt.repository_container_id=mc.container_id and rbt.status=1
            join custom_board_rack cbr on cbr.rack_id = rbt.board_container_id and cbr.status=1
            join resource_rack rr on rr.rack_id=rbt.board_container_id
            join nemr_question_additional_information nqai on nqai.question_id=cqm.question_id
            and nqai.status=1
            join (select 1 n union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9 union all select 10 ) numbers 
            on CHAR_LENGTH(concat(rr.parent_path, ',', rr.rack_id))-CHAR_LENGTH(REPLACE(concat(rr.parent_path, ',', rr.rack_id), ',', ''))>=numbers.n-1 
            
            WHERE ql.question_id= ${questionId} and ql.status=1 order by parent_path) as t1
            join resource_rack rr1 on t1.syllabus_id = rr1.rack_id 
            join rack_type rt on rt.rack_type_id= rr1.rack_type_id
            join custom_board_rack cbr1 on cbr1.rack_id=t1.syllabus_id and cbr1.custom_board_id=t1.custom_board_id and cbr1.status=1
            group by rr1.rack_type_id`;
            
            const res = await sql.query(sqlString,{type: QueryTypes.SELECT});
            var quesAdData=[];
            var finalArray=[];
            var additionalData=[];
            var syllabusId;
            var quesMarks='';
            //console.log("total =========count"+res.length);

            for(let boardLevelData of res){
            if(boardLevelData.rack_type_id == 2){
                syllabusId=boardLevelData.custom_board_id;
                quesMarks=boardLevelData.ques_marks;
            }else{
                syllabusId=boardLevelData.custom_board_rack_id;
            }
                quesAdData.push({syllabus_id:syllabusId,syllabus_type:boardLevelData.rack_type_id,syllabus_name:boardLevelData.rack_name,syllabus_type_name:boardLevelData.type_name});
                //quesAdData.join(",") ; 
                
                additionalData[0]=boardLevelData.difficulty_master_id;
                additionalData[1]=boardLevelData.content_id;
            }
            
           finalArray.push({syllabus_details:quesAdData,difficulty_level_id: additionalData[0],marks:quesMarks,content_id:additionalData[1],time_lapse:'null'});
           return finalArray;
        

    }catch (e){
        throw new Error(e)
    }

}


module.exports = questionModel;