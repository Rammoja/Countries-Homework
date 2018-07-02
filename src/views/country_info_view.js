const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function(container){
this.container = container;
};

CountryInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (evt) => {
    const countryData = evt.detail;
    this.populate(countryData);

  });
}

CountryInfoView.prototype.populate = function (countries) {
  countries.forEach((country) => {
    const countryName = document.createElement('option');
    countryName.textContent = country.name;
    this.container.appendChild(countryName);
  });
};



module.exports = CountryInfoView;
