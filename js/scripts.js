let totalAcertos = 0;
var answers = {};
const correctAnswers = {
    1: 3,
    2: 3,
    3: 4,
    4: 1,
    5: 3,
    6: 3,
    7: 3,
    8: 2,
    9: 3,
    10: 3
};

let totalErros = 0;


var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');

function verifyAnswer(question_number){
    if(answers[question_number] === correctAnswers[question_number]){
        totalAcertos += 1;

    } else{
        totalErros += 1;
    }
}
question_one.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[1] = userAnswer;
});

question_two.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[2] = userAnswer;
})

question_three.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[3] = userAnswer;
})
question_four.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[4] = userAnswer;
})
question_five.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[5] = userAnswer;
})
question_six.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[6] = userAnswer;
})
question_seven.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[7] = userAnswer;
})
question_eight.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[8] = userAnswer;
})
question_nine.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[9] = userAnswer;
})
question_ten.addEventListener('click', function(event){
    const userAnswer = parseInt(event.target.value);
    answers[10] = userAnswer;
})


var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

function finalText(){
    const localTexto =  document.getElementById('printsacertoinfo');
    let acertoInfo = '';
    if(totalAcertos < 6){
        acertoInfo= 'Parabéns! Você está quase lá!';
    }
    else if(totalAcertos >= 6){
        acertoInfo = 'Parabéns! Você sabe quase tudo sobre a Bahia!';
    } else if(totalAcertos === 10) {
        acertoInfo = 'Parabéns! Você Acertou tudo!'
    }
    localTexto.innerHTML = acertoInfo;
}


submit1.addEventListener('click', function(){
    nextQuestion(2);
    verifyAnswer(1);
});
submit2.addEventListener('click', function(){
    nextQuestion(3);
    verifyAnswer(2);
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    verifyAnswer(3);
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    verifyAnswer(4);
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    verifyAnswer(5);
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
    verifyAnswer(6);
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
    verifyAnswer(7);
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
    verifyAnswer(8);
})
submit9.addEventListener('click', function(){
    nextQuestion(10);
    verifyAnswer(9);
})
submit10.addEventListener('click', function(){
    let acerto_info;
    nextQuestion(10);
    verifyAnswer(10);
    document.getElementById('printtotalacerto').innerHTML = totalAcertos;
    document.getElementById('printtotalerros').innerHTML = totalErros;
    finalText();
})
