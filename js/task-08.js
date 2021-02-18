const containerEl = document.querySelector('div#boxes');
const rangeEl = document.querySelector('div#controls input');
const buttonsEls = document.querySelectorAll('div#controls button');

const colorGenerator = () => {
  const [red, green, blue] = [0, 1, 2].map(() => {
    return Math.floor(Math.random() * 256)
  });
  return `rgb(${red},${green},${blue})`;
};

const boxGenerator = position => {
  const divObj = document.createElement('div');
  divObj.style.width = divObj.style.height = `${30 + 10 * position}px`;
  divObj.style.backgroundColor = colorGenerator();
  return divObj;
};

//use append(... array)
const createBoxes = amount => {
  const listObj = [];
  for (let i = 0; i < amount; i += 1) {
    listObj.push(boxGenerator(i));
  }
  containerEl.append(...listObj);
};

//use fragment
// const createBoxes = amount => {
//   const fragmentObj = document.createDocumentFragment();
//   for (let i = 0; i < amount; i += 1) {
//     fragmentObj.appendChild(boxGenerator(i));
//   }
//   containerEl.appendChild(fragmentObj);
// };

const destroyBoxes = () => {
  containerEl.innerHTML = '';
  //while (containerEl.firstChild) {
  //  containerEl.removeChild(containerEl.firstChild);
  //}
};

const render = function () {
  if (containerEl.firstChild) {
    destroyBoxes();
  }
  const amount = rangeEl.value;
  createBoxes(amount);
};

buttonsEls.forEach(button => {
  const action = button.dataset.action;
  button.addEventListener('click', { render, destroy: destroyBoxes }[action]);
});