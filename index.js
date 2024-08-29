let currentQuestion = 1;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestion); 
});

function showQuestion(questionNumber) {
    const questions = document.querySelectorAll('.question');
    questions.forEach(q => q.classList.remove('active'));

    document.getElementById(`question-${questionNumber}`).classList.add('active');

    document.getElementById('prev-button').style.display = questionNumber === 1 ? 'none' : 'inline-block';
    document.getElementById('next-button').style.display = questionNumber === 3 ? 'none' : 'inline-block';
}

function nextQuestion() {
    if (currentQuestion < 3) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}
