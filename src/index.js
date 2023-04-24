import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')
const searchBox = document.getElementById('search-box')

const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input', debounce(async (e) => {

// const countryValue = e.target.value
// const countryName = countryValue.trim()
const countryName = e.target.value


const countries = await fetchCountries((countryName))

if(countryName === "") {
    countryList.innerHTML="";
    countryInfo.innerHTML="";
    return
}

if (countries.length >10) {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}

else (countries.length >= 2 && countries.length <=10) 
{   
     countryList.innerHTML = countries.map((country) => 
`<li> <img height="24" src="${country.flags.png}" />${country.name.common}</li>`
)
     .join("");



    //  countryList.addEventListener('click', (e)=> {
    //     console.log(`object`);
    
    //     countryList.innerHTML = countries.map((country) => 
    //     `<li> <img height="24" src="${country.flags.png}" />${country.name.common}</li>`
    //     )
    //          .join("");
    //     countryInfo.innerHTML = 
    //     `
    //  <p>Capital: ${countries[0].capital}</p>
    //  <p>Population: ${countries[0].population}</p>
    //  <p>Languages: ${Object.values([0].languages).join(',')}</p>
    // `;
    // })
    
    // console.log(countries.indexOf());


    };


if (countries.length === 1) {
    countryInfo.innerHTML = 
    `
 <p>Capital: ${countries[0].capital}</p>
 <p>Population: ${countries[0].population}</p>
 <p>Languages: ${Object.values(countries[0].languages).join(',')}</p>
`;
 }
 if (countries.length === null ){
    `
 <p> Nie ma takiego czegoś </p>
`}
 }, DEBOUNCE_DELAY)
)

