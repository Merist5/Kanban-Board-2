var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$(document).ready(function() {
  searchCountries();
  $('#search').on('click', function() {
    searchCountries();
  })
});

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.getJSON(url + countryName, showCountriesList);
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
    $('<li>').text(item.name + ', capital: ' + item.capital + ', region: ' + 
    item.region).appendTo(countriesList);
  });
}