import searchApi from './CountrySearchApi';
const apiUrl = 'https://restcountries.com/v3.1/name/';
const searchableCountry = 'usa';

const form = document.forms['form'];
const input = form.elements['input'];
const output = document.querySelector('#output');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  let inputValue = input.value;
  searchApi(inputValue, onDataReady);
}

function onDataReady(countries) {
  console.log(countries);
  if (countries.length >= 1) {
    const markup = countries.reduce((acc, country) => {
      acc += `<span>${country.name.official}</span><img width="200" src="${country.flags.svg}"><br>`;
      return acc;
    }, '');
    output.insertAdjacentHTML('afterbegin', markup);
  } else {
    output.textContent = 'Not found';
  }
}
