// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('ul#ingredients');
const fragment = document.createDocumentFragment();

function createLiTemplate(item) {
  const li = document.createElement('li');
  li.textContent = item;

  return li;
}

ingredients.forEach((ingredient) => {
  const li = createLiTemplate(ingredient);
  fragment.appendChild(li);
});

listRef.appendChild(fragment);