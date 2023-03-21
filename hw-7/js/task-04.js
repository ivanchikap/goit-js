// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterRef = document.querySelector('span#value');
let counterValue;

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

function onBtnsClick(e) {
  counterValue = Number(counterRef.textContent);
  const incrementValue = parseInt(e.target.textContent);
  counterRef.textContent = counterValue + incrementValue;
}

incrementBtnRef.addEventListener('click', onBtnsClick);
decrementBtnRef.addEventListener('click', onBtnsClick);