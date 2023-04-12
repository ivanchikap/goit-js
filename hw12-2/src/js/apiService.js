const apiUlr = 'https://restcountries.com/v3.1/name';

export default function getCountries(country, cb) {
  const url = `${apiUlr}/${country}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => cb(data))
    .catch(console.log);
}
