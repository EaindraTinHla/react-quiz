/*
   get/api/quiz

   [ 
    {
        "question":"Where is myanmar Located",
        "answers":[
            {"answer":"Asia",isCorrect:true},
            {"answer":"South",isCorrect:false},
            {"answer":"Some", isCorrect:false},
        ]
    }
]
*/

import mongoose  from "mongoose";

const Schema = new mongoose.Schema({
    question:{
        type : String,
        required : true,
     },
    answers: [
        {
             answer:{
                type:String,
                required:true,
             },
             isCorrect:{
                type:Boolean,
                required:true,
             },
        },

    ],

});
const QuizModel = mongoose.model('quiz', Schema);
export default QuizModel;