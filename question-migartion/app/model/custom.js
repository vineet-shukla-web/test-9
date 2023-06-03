exports.generate = function (n) {
    var add = 1,
            max = 51 - add;
    if (n > max) {
        return generate(max) + generate(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically 
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
}

exports.toTimestamp = function (strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
}

exports.manageRepositoryNameString = function (questionAdditionalData) {
    var repositoryNameString = '';
    if (questionAdditionalData) {
        var quesAdData = [];
        for (let questionAdData of questionAdditionalData) {
            quesAdData.push(questionAdData.name);
        }
        var repositoryNameString = quesAdData.join(',');
    }
    return repositoryNameString;
}

exports.manageLangBasedSubDetail = function (element, questionLangBasedDetailDataArray, getAnswerOptionsOfQuestion) {

    if (questionLangBasedDetailDataArray.length) {
        var newArray = [];
        for (let questionLangBasedData of questionLangBasedDetailDataArray) {
            newArray.push({
                question_id: questionLangBasedData.question_id,
                question_language_id: questionLangBasedData.question_language_id,
                language_id: questionLangBasedData.language_id,
                language_name: questionLangBasedData.language_name,

                //language_id: questionLangBasedData.language_id,
                question_text: questionLangBasedData.question_text,
                ques_instruction: questionLangBasedData.ques_instruction,
                question_teacher_description: questionLangBasedData.question_teacher_description,
                instruction_video: questionLangBasedData.instruction_video,
                question_video: questionLangBasedData.question_video,
                explaination_hint_video: questionLangBasedData.explaination_hint_video,
                answer_ideal_time: questionLangBasedData.answer_ideal_time,
                stage: element.action,
                status: element.status,
                imported_from: [],
                created_by: element.user_id,
                created_date: this.toTimestamp(element.creation_date),
                updated_by: element.user_id,
                updated_date: this.toTimestamp(element.updation_date),
                question_answer: getAnswerOptionsOfQuestion
            });
        }
        var questionLangBasedDetailDataArray = newArray;
    }
    return questionLangBasedDetailDataArray;
}