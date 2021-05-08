var APIkey = 'e8441a8f1e76def5cd186ddb0adbbe22';
var weatherApi = 'https://api.openweathermap.org/data/2.5/forecast?q=';
var cityName = document.getElementById('currentCity');
var temp = document.getElementById('currentTemp');
var wind = document.getElementById('currentWind');
var date = document.getElementById('date');
var previous = document.getElementById('previousSearch');
var input = document.getElementById('locations');
var url =`https://api.openweathermap.org/data/2.5/weather?q=`;
var units = '&units=imperial';

// function that will get data when the search btn is clicked on 
$('#searchBtn').on('click',function() {
    fetch(url+input.value+APIkey+units)
    .then(response => response.json())
    .then(data => {
        console.log(data)

