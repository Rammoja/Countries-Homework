const Countries = require('./models/countries.js')
const CountryInfoView = require('./views/country_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const countryData = new Countries('https://restcountries.eu/rest/v2/all');
  countryData.getData();



  const container = document.querySelector('select#countries')
  const countryView = new CountryInfoView(container);
  countryView.bindEvents();
});
