function submitQuiz() {
  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');
  const selectedOption = form.querySelector('input[name="question1"]:checked');

  if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === 'Paris') {
          resultDiv.textContent = 'Correct! The capital of France is Paris.';
          resultDiv.style.color = 'green';
      } else {
          resultDiv.textContent = 'Incorrect. The capital of France is Paris.';
          resultDiv.style.color = 'red';
      }
  } else {
      resultDiv.textContent = 'Please select an option.';
      resultDiv.style.color = 'orange';
  }
}