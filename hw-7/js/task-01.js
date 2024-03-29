// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
const listRef = document.querySelector('ul#categories');
const liRef = [...listRef.children];
const liCounts = liRef.length;

console.log(`В списке ${liCounts} категорий`);

liRef.forEach((li) => {
  const h2Text = li.querySelector('h2').textContent;
  const innerLiCounts = li.querySelector('ul').children.length;
  console.log(`Заголовок: ${h2Text}; Кількість елементів li: ${innerLiCounts}`);
});
