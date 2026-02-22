// dashboard.js

// Question data loading
let questions = [];

function loadQuestionData() {
    // Simulating loading question data
    questions = [
        { question: 'What is 2 + 2?', answers: ['3', '4', '5'], correct: 1, type: 'pilihan ganda' },
        { question: 'Solve: x^2 - 4 = 0', answers: ['x=2', 'x=-2', 'x=0'], correct: 0, type: 'kompleks' },
        { question: 'Explain the law of gravity.', answers: [], correct: null, type: 'kategori' }
    ];
}

// Answer tracking
let userAnswers = [];

function trackAnswer(questionIndex, answerIndex) {
    userAnswers[questionIndex] = answerIndex;
}

// Score calculation with weights
function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] !== undefined) {
            const isCorrect = userAnswers[index] === question.correct;
            const weight = question.type === 'pilihan ganda' ? 1 : question.type === 'kompleks' ? 2 : 3;
            score += isCorrect ? weight : 0;
        }
    });
    return score;
}

// Display results in categories
function displayResults(score) {
    let result;
    if (score >= 86) {
        result = 'Istimewa';
    } else if (score >= 71) {
        result = 'Baik';
    } else if (score >= 56) {
        result = 'Memadai';
    } else {
        result = 'Kurang';
    }
    console.log('Your score is: ' + score + '. Result: ' + result);
}

// Example usage
loadQuestionData();
trackAnswer(0, 1); // User answers the first question with index 1
trackAnswer(1, 0); // User answers the second question with index 0
const score = calculateScore();
displayResults(score);
