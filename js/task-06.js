const editElement = document.querySelector('input#validation-input');

const onFocusOutHandler = function (event) {
  const textLength = Number(this.value.length);
  const limit = Number(this.dataset.length);
  if (textLength === limit) {
    this.classList.add('invalid');
    this.classList.remove('valid');
  } else {
    this.classList.add('valid');
    this.classList.remove('invalid');
  }
};

editElement.addEventListener('blur', onFocusOutHandler);