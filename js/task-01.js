const categoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesEl.length} категории.`);

for (const category of categoriesEl) {
  const title = category.querySelector('h2').textContent.trim();
  const elementsCount = category.querySelectorAll('li').length;
  console.log(
    ` Категория: ${title}, Количество элементов: ${elementsCount}`,
  );
}

