// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const boxesRef = document.querySelector('#boxes');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('input[type="number"]');

destroyBtn.addEventListener('click', onDestroyBtnClick);
renderBtn.addEventListener('click', createBoxes);

function onDestroyBtnClick(e) {
  boxesRef.innerHTML = '';
}

function createBoxes(e) {
  let countOfElements = inputRef.value;
  const allElements = countOfElements;

  const fragment = document.createDocumentFragment();
  while (countOfElements) {
    const div = createDivTemplate(allElements - countOfElements + 1);
    fragment.append(div);
    countOfElements--;
  }

  boxesRef.append(fragment);
}

function createDivTemplate(amount) { 
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const div = document.createElement('div');
  div.style.width = `${30 + amount * 10}px`;
  div.style.height = `${30 + amount * 10}px`;
  div.style.backgroundColor = randomColor;
  return div;
}
