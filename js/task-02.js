const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const placeHolderEl = document.querySelector('#ingredients');

const listItemRefs = ingredients.map(ingredient => {
  const itemObj = document.createElement('li');
  itemObj.textContent = ingredient;
  return itemObj;
});

placeHolderEl.append(...listItemRefs);

