import searchApi from './CountrySearchApi';
const apiUrl = 'https://restcountries.com/v3.1/name/';
const searchableCountry = 'usa';

const form = document.forms['form'];
const input = form.elements['input'];
const output = document.querySelector('#output');
const btnWrapper = document.querySelector('.btn-wrapper');


form.addEventListener('submit', onFormSubmit);
btnWrapper.addEventListener('click', onBtnsClick);

function onBtnsClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    console.log('click not in the  button');
    return;
  }
  const chosenCountry = e.target.dataset.country;
  searchApi(chosenCountry, onDataReady);
}

function onFormSubmit(e) {
  e.preventDefault();
  let inputValue = input.value;
  searchApi(inputValue, onDataReady);
}

function onDataReady(countries) { 
  output.innerHTML = ''; 
  if (countries.length >= 1) {
    const markup = countries.reduce((acc, country) => {
      acc += `<div class="mt-4">${country.name.official}</div><img width="200" src="${country.flags.svg}"><br>`;
      return acc;
    }, '');
    output.insertAdjacentHTML('afterbegin', markup);
  } else {
    output.textContent = 'Not found';
  }
}
