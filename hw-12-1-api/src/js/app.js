import searchApi from './CountrySearchApi';
import searchApiRegion from './RegionSearchApi';
import {debounce} from 'lodash';
const searchableCountry = 'usa';

const form = document.forms['form'];
const input = form.elements['input'];
const output = document.querySelector('#output');
const btnWrapper = document.querySelector('.btn-wrapper');

const selectWrapper = document.querySelector('.select-wrapper');

form.addEventListener('submit', onFormSubmit);
input.addEventListener('input', debounce(onFormSubmit, 1000));
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

const arrOfRegions = [
  { data: 'eu', label: 'Europian Union' },
  { data: 'asia', label: 'Asian Countries' },
  { data: 'america', label: 'American Countries' },
];

function generateSelect(arrOfRegions) {
  const select = document.createElement('select');
  select.name = 'country-select';
  select.id = 'country-select';
  arrOfRegions.forEach((region) => {
    const option = document.createElement('option');
    option.value = region.data;
    option.textContent = region.label;
    select.appendChild(option);
  });
  return select;
}

function initSelect(e) {
  const select = generateSelect(arrOfRegions);
  selectWrapper.appendChild(select);
  
  select.addEventListener('change', selectHandler);

  function selectHandler(e) { 
    searchApiRegion(e.target.value, onDataReady);
  }
}

document.addEventListener('DOMContentLoaded', initSelect);




