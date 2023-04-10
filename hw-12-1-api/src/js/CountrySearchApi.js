const apiUrl = 'https://restcountries.com/v3.1/name/';

export default function searchApi(search, callback) {
  console.log(`${apiUrl}/${search}`);
  fetch(`${apiUrl}/${search}`)
  .then((res) => res.json())
  .then((data) => callback(data))
  .catch((err) => console.log(err));
}