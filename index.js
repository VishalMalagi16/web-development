let currentQuestion = 1;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestion); // Show the first question when the page loads
});

function showQuestion(questionNumber) {
    // Hide all questions
    const questions = document.querySelectorAll('.question');
    questions.forEach(q => q.classList.remove('active'));

    // Show the current question
    document.getElementById(`question-${questionNumber}`).classList.add('active');

    // Update button states
    document.getElementById('prev-button').style.display = questionNumber === 1 ? 'none' : 'inline-block';
    document.getElementById('next-button').style.display = questionNumber === 4 ? 'none' : 'inline-block';
    document.getElementById('submit-button').style.display = questionNumber === 4 ? 'inline-block' : 'none';
}

function nextQuestion() {
    if (currentQuestion < 4) {
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

function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let allAnswered = true;

    // Check if all questions are answered
    for (let i = 1; i <= 4; i++) {
        const selectedOption = form.querySelector(`input[name="q${i}"]:checked`);
        if (!selectedOption) {
            allAnswered = false;
            break;
        }
    }

    if (!allAnswered) {
        alert('Please answer all questions before submitting.');
        return; // Exit the function if not all questions are answered
    }

    // Define the correct answers
    const correctAnswers = {
        q1: 'A',  // Left
        q2: 'B',  // Albert Einstein
        q3: 'A',  // 1912
        q4: 'A'   // East
    };

    let score = 0;
    let resultHtml = ''; // Store results HTML to be displayed on the results page

    for (let i = 1; i <= 4; i++) {
        const selectedOption = form.querySelector(`input[name="q${i}"]:checked`);

        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === correctAnswers[`q${i}`]) {
                score++;
                resultHtml += `<p>Question ${i}: <span class="correct">Correct!</span></p>`;
            } else {
                resultHtml += `<p>Question ${i}: <span class="incorrect">Incorrect</span>. The correct answer is ${getOptionLabel(correctAnswers[`q${i}`], i)}.</p>`;
            }
        } else {
            resultHtml += `<p>Question ${i}: <span class="no-answer">Please select an option.</span></p>`;
        }
    }

    // Add the total score
    resultHtml += `<p>You scored ${score} out of 4.</p>`;
    
    // Save results to localStorage to display on the results page
    localStorage.setItem('quizResults', resultHtml);

    // Redirect to the results page
    window.location.href = 'results.html';
}

// Helper function to get the option label based on the correct answer
function getOptionLabel(answer, questionNumber) {
    const labels = {
        q1: ['Left', 'Right', 'Up', 'Down'],
        q2: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Galileo Galilei'],
        q3: ['1912', '1905', '1898', '1923'],
        q4: ['East', 'West', 'North', 'South']
    };

    return labels[`q${questionNumber}`][answer.charCodeAt(0) - 'A'.charCodeAt(0)];
}
