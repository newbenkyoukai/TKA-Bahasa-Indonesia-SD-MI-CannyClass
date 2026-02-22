// dashboard.js

// Function to load data
async function loadData() {
    const response = await fetch('/api/questions');
    const questions = await response.json();
    return questions;
}

// Function to display questions
function displayQuestion(question) {
    const questionContainer = document.getElementById('question');
    questionContainer.innerHTML = `<h3>${question.text}</h3>`;

    // Display answer options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        optionsContainer.innerHTML += `<button onclick='checkAnswer(${index})'>${option}</button>`;
    });
}

// Variables to hold questions and scores
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Function to check the answer
function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correctIndex) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        displayResults();
    }
}

// Function to display results
function displayResults() {
    const resultContainer = document.getElementById('results');
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
}

// Main function to initialize the test
async function initTest() {
    questions = await loadData();
    displayQuestion(questions[currentQuestionIndex]);
}

// Invoke initTest to start the test
initTest();