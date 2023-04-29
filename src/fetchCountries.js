const BASE_API_URL = 'https://restcountries.com/v3.1/name/';
const fields = "fields=name,capital,population,flags,languages"

    export const fetchCountries = (name) => {
       return fetch(`${BASE_API_URL}${name}?${fields}
       `)
       .then(response => response.json())
       .catch (error => Notiflix.Notify.failure('Oops, there is no country with that name') )
    
       
    }    

 