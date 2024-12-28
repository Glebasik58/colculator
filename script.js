const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('.button');
let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === 'AC') {
      input = '';
    } else if (value === 'DEL') {
      input = input.slice(0, -1);
    } else if (value === '=') {
      try {
        input = eval(input); // Используйте с осторожностью, лучше заменить на собственный парсер.
      } catch (error) {
        input = 'Error';
      }
    } else {
      input += value;
    }
    inputBox.value = input;
  });
});