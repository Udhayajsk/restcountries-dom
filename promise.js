/*var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((data1)=>{
    console.log(data1)
    for(let i=0;i<data1.length;i++){
        var two=document.createElement("li");
        two.innerHTML=`
        <div class="card" style="width: 18rem;">
  <img src="${data1[i].flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data1[i].capital}</h5>
    <p class="card-text">${data1[i].region}</p>
    <p class="card-text">${data1[i].latlng}</p>
    <p class="card-text">${data1[i].name}</p>
    <p class="card-text">${data1[i].callingCodes}</p>
    <button type="button" class="btn btn-info">
    <a href=${Math.round(data1[i].timezones - 273.15)}> weather </a>
  </button>

   
</div>
</div>
 

       `
        
    
    document.body.append(two)
    }
})

*/
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