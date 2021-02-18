const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//use append (... )
const placeHolderEl = document.querySelector('#ingredients');

const listItemRefs = ingredients.map(ingredient => {
  const itemObj = document.createElement('li');
  itemObj.textContent = ingredient;
  return itemObj;
});

placeHolderEl.append(...listItemRefs);

//use fragment
// const placeHolderEl = document.querySelector('#ingredients');
// const fragmentObj = document.createDocumentFragment();

// ingredients.forEach(ingredient => {
//   const itemObj = document.createElement('li');
//   itemObj.textContent = ingredient;
//   fragmentObj.appendChild(itemObj);
// });

// placeHolderEl.appendChild(fragmentObj);