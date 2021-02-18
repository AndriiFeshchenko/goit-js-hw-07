const categoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesEl.length} категории.`);

for (const category of categoriesEl) {
  const title = category.querySelector('h2').textContent.trim();
  const elementsCount = category.querySelectorAll('li').length;
  console.log(
    `\n\u2022 Категория: ${title}\n\u2022 Количество элементов: ${elementsCount}`,
  );
}

//use rest, map

// [...categoriesEl].map((category) => {
//   const title = category.querySelector("h2").textContent.trim();
//   const elementsCount = category.querySelectorAll("li").length;
//   console.log(
//     `\n\u2022 Категория: ${title}\n\u2022 Количество элементов: ${elementsCount}`
//   );
// });