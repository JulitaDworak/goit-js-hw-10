import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const countryList = document.querySelector('.country-list')
const searchBox = document.getElementById('search-box')

const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input', debounce(async (e) => {
console.log(`hello today`);
    const countries = await fetchCountries((e.target.value))
},DEBOUNCE_DELAY)
)

// const API_URL = "https://restcountries.com/v3.1/all"
// console.log(API_URL);
// fetch(API_URL)
// .then((response) => response.json())
// .then((data)=> {
// countryData = data[0]
// console.log(countryData);
// const countryInfo = API_URL.map((country) => countryData.name.common)
// console.log(countryInfo);
// }





// countryItem.addEventListener('input', debounce((e) => {
//     console.log(`hello`)
// let text = countryItem.value
// console.log(text );
// let finalURL = `https://restcountries.com/v3.1/name/${text}?`
// console.log(finalURL);



// fetch(finalURL)
// .then((response) => response.json())
// .then((data)=> {
// countryData = data[0]
// console.log(countryData);

// let country = countryData.name.common

// // const listOfCountries = country.filter((country) => country.toLowerCase().includes(text.toLowerCase()))


// console.log(country.split(""));

// // const filterCountry = country.filter((name) => name.toLowerCase().includes(text.toLowerCase()))

// console.log(country);

// // countryList.textContent = `<li>${filterCountry}<li>`
// if(text.includes(country.split(''))) {
// flag.src = countryData.flags.svg;
// name.innerHTML = countryData.name.common;
// capital.innerHTML = countryData.capital;
// continent.innerHTML = countryData.continents;
// population.innerHTML = countryData.population;
// currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name;
// currencyShort.innerHTML = Object.keys(countryData.currencies)[0];
// language.innerHTML = Object.values(countryData.languages).toString().split(',').join(',');

// // return console.log(`to był dobry pomysł`)
//     // `<li>${countryData.name.common}</li>`
// }
// else {
//    console.log(`tragedia`);
// }



// })
// // const country = 

// // const listOfCountries = 

// },DEBOUNCE_DELAY)
// )



// searchBtn.addEventListener('click', ()=> {
// let countryName = countryItem.value;
// let finalURL = `https://restcountries.com/v3.1/name/${countryName}?`
// console.log(finalURL);

// Notiflix.Report.warning('Uwaga', 'Znaleźliśmy szykany kraj', 'sprawdź wyniki wyszukowania');

// fetch(finalURL)
// .then((response) => response.json())
// .then((data)=> {
// countryData = data[0]
// console.log(countryData);
// flag.src = countryData.flags.svg;
// name.innerHTML = countryData.name.common;
// capital.innerHTML = countryData.capital;
// continent.innerHTML = countryData.continents;
// population.innerHTML = countryData.population;
// currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name;
// currencyShort.innerHTML = Object.keys(countryData.currencies)[0];
// language.innerHTML = Object.values(countryData.languages).toString().split(',').join(',');
// })
// })

//  `<li>
//  <h2>Country: ${item.name.common}</h2>
//  <h2>Capital: ${item.name.common}</h2>
//  <h2>Population: ${item.name.common}</h2>
//  <h2>Flags: ${item.name.common}</h2>
//  <h2>Languages: ${item.name.common}</h2>
//  </li>`