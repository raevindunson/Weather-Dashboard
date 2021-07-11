var cityChoice = document.getElementById("input-city")
var citySubmit = document.getElementById("city-button")

//Click did not work. API does function, but search term did not function properly
$("#city-button").click(function() {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?' +
        'q=' + valueOf(cityChoice) +
        '&appid=17d2ded72fe219e1012b48d2ab810242'
    )
    .then(function(res) {
        return res.json();
    })
    .then(function(res) {
        console.log(res);
    })
})

//Here I would add more functions to display the weather data from the API on the HTML.
//I would also add functions for localStorage to save the data from searches