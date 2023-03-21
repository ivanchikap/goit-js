// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector('input#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputHandler);

function onInputHandler(e) {
  nameOutputRef.textContent = e.target.value;
  if (!e.target.value) {
    nameOutputRef.textContent = 'незнакомец';
  }
}
