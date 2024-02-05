
const API_URL = 'https://restcountries.com/v2/all';

const displayCards = (data) => {
  const cardsContainer = document.getElementById('country-cards');
  cardsContainer.innerHTML = '';

  data.forEach((country) => {
    const { capital, region, latlng, name, flags: { svg }, alpha2Code } = country;
    const card = `
    <div class="col-md-6 mb-3">
    <div class="card">
      <img src="${svg}" class="card-img-top" alt="${name}">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Capital: ${capital}</p>
        <p class="card-text">Region: ${region}</p>
        <p class="card-text">Latitude: ${latlng[0]}</p>
        <p class="card-text">Longitude: ${latlng[1]}</p>
        <p class="card-text">Alpha2 Code: ${alpha2Code}</p>
        <button type="button" class="btn btn-info"> click to know weather
 
</button>

      </div>
    </div>
  </div>`


    cardsContainer.innerHTML += card;
  });
};

$(document).ready(function() {
  $.getJSON(API_URL, displayCards);
});
