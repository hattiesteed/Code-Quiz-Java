// elements from the HTML
var buttonA = document.getElementId ('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');
var startButton = document.getElementById('startbtn');
var finalScoreE1 = document.getElementById("finalScore");
var quizTimer = document.getElementById("timer");


// other variables
var currentQuestion = quizQuestion[currentQuestionIndex];

// Quiz questions
var Questions = [{
    question:"Keydown is when...?",
    choiceA:"Event fired when key is pressed",
    choiceB:"Event fired when key is released",
    choiceC:"Event fired when a key that procused a character value is presed down",
    correctAnswer: "a" },
{
    question: "Which of these options is NOT a data type?",
    choiceA: "Null",
    choiceB:"Boolen",
    choiceC: "Array",
    choiceD:"Number",
    correctAnswer: "c" },
{
    question: "Is JavaScript a case-sensitve language?",
    choiceA: "True",
    choiceB: "False",
    correctAnswer: "a" },
{
    question:"What type of storage has NO expiration time?",
    choiceA: "Local storage",
    choiceB: "Session storage",
    choiceC: "All of the above!", 
    correctAnswer: "a" },

{
    question:"How can you empty an Array in JavaScript?",
    choiceA:"arrayList = []",
    choiceB:"arrayList.length = 0;",
    choiceC:"arrayList.splice(0, arrayList.length);",
    choiceD: "All of the above",
    correctAnswer: "d" },

{
    question:"What logical compariosn operative means equal to?",
    choiceA:"!==",
    choiceB:"=",
    choiceC:"==",
    choiceD:"===",
    correctAnswer: "c" },
];

// Function goes through the array containing the quiz questions to generate questions and the answers/
    function generateQuizQuestion(){
        gameoverDiv.style.display = "none";
        if (currentQuestionIndex === finalQuestionIndex){
            return showScore();
        }
        
    }


