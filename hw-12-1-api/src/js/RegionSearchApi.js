const apiUrlRegion = 'https://restcountries.com/v3.1/region/';

export default function searchApiRegion(search, callback) { 
  fetch(`${apiUrlRegion}/${search}`)
  .then((res) => res.json())
  .then((data) => callback(data))
  .catch((err) => console.log(err));
}