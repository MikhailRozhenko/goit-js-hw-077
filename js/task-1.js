const allCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((item) => {
  const pageCategories = item.querySelector('.page-task-van').textContent;
  const itemCategories = item.querySelectorAll('.list-item').length;
  console.log(`Category: ${pageCategories}`);
  console.log(`Elements: ${itemCategories}`);
});
