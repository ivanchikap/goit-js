import itemsTemplate from '../templates/gallery-items.hbs';
import data from './data.json';

const body = document.body;
const switchRef = document.getElementById('theme-switch-toggle');
const markup = itemsTemplate(data);
// const markup = itemsTemplate(['html', 'css', 'js', 'react']);

const menu = document.querySelector('.js-menu');

menu.insertAdjacentHTML('afterbegin', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// body.classList.add(Theme.DARK);

switchRef.addEventListener('input', setTheme);
document.addEventListener('DOMContentLoaded', changeTheme);

function setTheme(e) {
  const target = e.target;  
  
  const neededTheme = target.checked ? Theme.DARK : Theme.LIGHT;

  if (neededTheme === Theme.DARK) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);    
    localStorage.setItem('theme', Theme.DARK);
  }

  if (neededTheme === Theme.LIGHT) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);  
    localStorage.setItem('theme', Theme.LIGHT);
  } 
}

function changeTheme() {
  const themeFromLS = localStorage.getItem('theme');
  if (themeFromLS === Theme.DARK) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);    
    localStorage.setItem('theme', Theme.DARK); 
    switchRef.value = 'on'; 
    switchRef.checked = true; 
  }

  if (themeFromLS === Theme.LIGHT) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);  
    localStorage.setItem('theme', Theme.LIGHT);   
  } 
}
