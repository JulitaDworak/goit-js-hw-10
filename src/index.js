import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')
const searchBox = document.getElementById('search-box')

const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input', debounce(onInputSearch), DEBOUNCE_DELAY)


// function for listener
function onInputSearch () {
const name = searchBox.value

// task to delete country info
if (name ==="") {
    return (countryList.innerHTML=""), countryInfo.innerHTML=""
}

// show info
fetchCountries(name) 
    .then(countries => { 
countryList.innerHTML = ""
countryInfo.innerHTML =""

if(countries.length === 1) {
        countryList.innerHTML = addCountryList(countries)
        countryInfo.innerHTML = addCountryInfo(countries)
    }
else if(countries.length >= 10) {
    toManyCountries()
}
else {
    countryList.innerHTML = addCountryList(countries)
}
})
.catch( error => alertNotFound())
}


// function about basic info of countries name and flag

function addCountryList (countries){
    const list = countries.map(({flags, name}) => {
        return ` 
        <li>
        <img src="${flags.png}" width ="24"></img>
        ${name.common}
        </li>
        `
    })
    .join("")
    return list
}

// function about full info of countries 

function addCountryInfo (countries) {
    const fullInfo = countries
    .map(({capital,population,languages}) =>{
return `<p><b>Capital</b>: ${capital}</p>
 <p><b>Population</b>: ${population}</p>
 <p><b>Languages</b>: ${Object.values(languages).join(',')}</p>
`
    })
    .join("")
    return fullInfo
}

// function about to many countries

function toManyCountries () { 
Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}

// function about not found countries

function alertNotFound () {
    Notiflix.Notify.failure('Oops, there is no country with that name');
}


