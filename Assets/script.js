// elements from the HTML
var buttonA =document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');
var homePage = document.getElementById('homePage');
var resultsPage = document.getElementById('quiz-results');
var quizPage = document.getElementById('quiz');
var startButton = document.getElementById('startbtn');
var questions = document.getElementById("questions")
var finalScore = document.getElementById("final-score");
var quizTimer = document.getElementById("timer");
var gameOver = document.getElementById("gameover");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayScore = document.getElementById('highscores-score');
var highscoreDisplayName = document.getElementById("highscore-initials");
var highscoreContainer = document.getElementById("highscore-container");
var highScorePage = document.getElementById("highScorePage");
var endGameBtn = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submit");


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

var finalQuestionIndex = quizQuestion.length;
var currentQuestionIndex = 0;
var timerInterval;
var score = 0;
var timeLeft = 100;
var correct;
// Function goes through the array containing the quiz questions to generate questions and the answers/
function generateQuizQuestion(){
    gameOver.style.display = "none";
        if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
        }
var currentQuestion = quizQuestion[currentQuestionIndex];
    questionsE1.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innterHTML = currentQuestion.choiceD;
    };
// Start Quiz function starts the time, hides the start button, shows the first question
function startQuiz() {
    gameOver.style.display = "none";
    homePage.style.display = "none";
    generateQuizQuestion();

//  timer
timerInterval = setInterval(function() { 
timeLeft--;
quizTimer.textContent = "Time left: " + timeLeft;
    if(timeLeft === 0) {
    clearInterval(timerInterval);
    showScore();
    }
    }, 1000);
    quizPage.style.display = "block";
}
// end page displays score after finishing the quiz or if u ran out of time
function showScore(){
    quizPage.style.display = "none"
    gameOver.style.display = "flex";
    clearInterval (timerInterval);
    highscoreInputName.value = "";
    finalScore.innerHTML = "Your score " + score + " out of " + quizQuestion.length + "correct";
}

// Run function highscore that saves the array of high scores and pushes new username and score into the array on local storage.
submitScoreBtn.addEventListener("click", function highscore(){
    if(highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false; }
    else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var curentHighscore = {
            name : currentUser,
            score : score
        };

        gameOver.style.display = "none";
        highscoreContainer.style.display = "flex";
        savedHighscores.style.display = "block";
        endGameBtn.style.display = "flex";

        savedHighscores.push(curentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});

// this will clear the list for the high scores and make anew high score list from the local storage
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innterHTML = "";
    var highscore = JSON.parse(localStorage.getItem("savedHighsocre")) || [];
    for (i=0; i<highscore.length; i++){
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        newName.textContent = highscores[i].name;
        newScore.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newName);
        highscoreDisplayScore.appendChild(newScore);
    }
}
// displays the high scores page while hiding all pages
function showHighscore(){
    homePage.style.display = "none"
    highscoreContainer.style.display = "flex";
    gameOver.style.display = "none";
    highscore.style.display = "block";
    endGameBtn.style.display = "flex";
    generateHighscores();
}

// clears the local storage of the high scores as well as clearing the text from the high score board
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameOver.style.display = "none";
    homePage.style.display = "flex";
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 100;
}
// correct answer   
function checkAnswer(answer){
    correct = quizQuestion[currentQuestionIndex].correctAnswer;
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("Yay! Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("Wrong.")
        currentQuestionIndex++;
        generateQuizQuestion();
        // results div that your answer is incorrect
    }else{
        showScore();
    }
    }
startButton.addEventListener("click", startQuiz);
