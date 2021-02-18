const editEl = document.querySelector('input#validation-input');
//editEl.classList.add('invalid');

const onFocusOutHandler = function (event) {
  const textLength = this.value.length;
  const limit = this.dataset.length;
  if (textLength < limit) {
    this.classList.add('invalid');
    this.classList.remove('valid');
  } else {
    this.classList.add('valid');
    this.classList.remove('invalid');
  }
};

editEl.addEventListener('blur', onFocusOutHandler);