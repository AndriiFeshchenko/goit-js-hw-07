const inputEl = document.querySelector('input#name-input');
const titleEl = document.querySelector('span#name-output');

const onInputHandler = event => {
  titleEl.textContent = inputEl.value ? inputEl.value : 'незнакомец';
};

inputEl.addEventListener('input', onInputHandler);