const questions = [
    {
        question: "Which is the largest bird in the world?",
        answers: [
            {"text": "Ostrich", "correct": true},
            {"text": "Eagle", "correct": false},
            {"text": "Albatross", "correct": false},
            {"text": "Penguin", "correct": false}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Arctic", correct: false},
            {text: "Australia", correct: true},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is the longest snake in the world?",
        answers: [
            {"text": "Reticulated Python", "correct": true},
            {"text": "King Cobra", "correct": false},
            {"text": "Anaconda", "correct": false},
            {"text": "Boa Constrictor", "correct": false}
        ]
    },
    {
        question: "Which is the tallest land animal?",
        answers: [
            {"text": "Giraffe", "correct": true},
            {"text": "Elephant", "correct": false},
            {"text": "Kangaroo", "correct": false},
            {"text": "Moose", "correct": false}
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the heaviest land animal?",
        answers: [
            {"text": "African Elephant", "correct": true},
            {"text": "Hippopotamus", "correct": false},
            {"text": "Gorilla", "correct": false},
            {"text": "Bison", "correct": false}
        ]
    },
    {
        question: "Which is the smallest bird in the world?",
        answers: [
            {"text": "Bee Hummingbird", "correct": true},
            {"text": "Sparrow", "correct": false},
            {"text": "Canary", "correct": false},
            {"text": "Parrotlet", "correct": false}
        ]
    },
    {
        question: "Which is the biggest species of shark?",
        answers: [
            {"text": "Whale Shark", "correct": true},
            {"text": "Great White Shark", "correct": false},
            {"text": "Hammerhead Shark", "correct": false},
            {"text": "Tiger Shark", "correct": false}
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text: "Vatican city", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            {"text": "Cheetah", "correct": true},
            {"text": "Lion", "correct": false},
            {"text": "Horse", "correct": false},
            {"text": "Kangaroo", "correct": false}
        ]
    },
];

const QuestionElement =  document.querySelector(".question");
const AnswerButtons = document.querySelector(".answer-buttons");
const NextBtn = document.querySelector(".next-btn");

let Currentquestionindex = 0;
let Score = 0;

function Startquiz() {
    Currentquestionindex = 0;
    Score = 0;
    NextBtn.innerHTML = "Next";
    Showquestion();
}

function Showquestion(){
    resetstate();
    let Currentquestion = questions[Currentquestionindex];
    let Questionnumber = Currentquestionindex + 1;
    QuestionElement.innerHTML = Questionnumber + ". " + Currentquestion.question;

    Currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        AnswerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetstate(){
    NextBtn.style.display = "none";
    while(AnswerButtons.firstChild){
        AnswerButtons.removeChild(AnswerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        Score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(AnswerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    NextBtn.style.display = "block";
}

function showScore(){
    resetstate();
    QuestionElement.innerHTML = `You Scored ${Score} out of ${questions.length}!`;
    NextBtn.innerHTML = "Play Again";
    NextBtn.style.display = "block";
}

function handleNextButton(){
    Currentquestionindex++;
    if(Currentquestionindex < questions.length){
        Showquestion();
    }
    else{
        showScore();
    }
}

NextBtn.addEventListener("click", function(){
    if(Currentquestionindex < questions.length){
        handleNextButton();
    }
    else{
        Startquiz();
    }
})

Startquiz();