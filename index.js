document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const resultElement = document.getElementById('result');

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        const result = parseInt(num1.value) + parseInt(num2.value);
        resultElement.innerHTML = `Result: ${isNaN(result) ? "Invalid input" : result}`;
    });
});
