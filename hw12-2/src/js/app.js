import getCountries from './apiService';
import { debounce } from 'lodash';
import { error } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/BrightTheme.css';

const input = document.querySelector('#input');
const output = document.querySelector('#results');

input.addEventListener('input', debounce(inputHandler, 1000));

function inputHandler(e) {
  const neededCountry = e.target.value;
  const countries = getCountries(neededCountry, dataHandler);
}

function dataHandler(data) {
  if (data.length >= 10) {
    error({
      title: 'Error message',
      text: 'Too many matches found. Please enter a more specific query',
    });  
    return;
  }

  if (!data.length) {
    error({ title: 'Error message', text: 'No results by you query' });   
    return;
  }

  if (data.length > 1 && data.length < 10) {
    clearOutput();
    const element = generateListTemplate(data);
    output.appendChild(element);   
    return;
  }

  if (data.length === 1) {
    clearOutput();
    const markup = generateMarkupOf1El(data);
    output.insertAdjacentHTML('afterbegin', markup);  
    return;
  }
}

function generateMarkupOf1El([country]) {
  console.log(country);

  return `
          <h2>${country.name.common}</h2>
          <div class="country">
            <div class="country__col">
              <dl>
                <div class="country__item">
                  <dd>Capital:</dd>
                  <dt>${country.capital[0]}</dt>
                </div>
                <div class="country__item">
                  <dd>Population:</dd>
                  <dt>${country.population}</dt>
                </div>
                <div class="country__item">
                  <dd>Languages:</dd>
                  <dt class="js-languages">${[
                    ...Object.values(country.languages),
                  ]}</dt>
                </div>            
              </dl>
            </div>
            <div class="country__col">
              <img src="${country.flags.png}" alt="">
            </div>
          </div>
  `;
}

function generateListTemplate(countries) {
  console.log(countries);
  const ul = document.createElement('ul');
  ul.classList.add('list');
  countries.forEach((country) => {
    const li = document.createElement('li');
    li.textContent = country.name.common;
    ul.appendChild(li);
  });

  return ul;
}

function clearOutput() {
  output.innerHTML = '';
}
