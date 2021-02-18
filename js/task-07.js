const rangeEl = document.querySelector('input#font-size-control');
const labelEl = document.querySelector('span#text');

labelEl.style.fontSize = `${rangeEl.value}px`;

const onInputHandler = function (event) {
  labelEl.style.fontSize = `${this.value}px`;
};

rangeEl.addEventListener('input', onInputHandler);