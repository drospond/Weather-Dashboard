$(document).ready(function(){
    var APIKey = "a012e3cf5aad2cc3ed0a6457c88685ce";
    var latitude;
    var longitude;
    var queryURLUV = "api.openweathermap.org/data/2.5/uvi/history?lat=" + "&lon=" + "&appid=" + APIKey;
    
    function renderWeather(cityName){
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityName + "&appid=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            $("#cityName").text(response.name + " (" + moment().format("L") + ") " + response.weather[0].main);
            $("#temperature").text(response.main.temp + "F");
            $("#humidity").text(response.main.humidity + "%");
            $("#wind-speed").text(response.wind.speed + " MPH");
        })
    }

    function search(event){
        event.preventDefault();
        var cityName = $("#search").val();
        renderWeather(cityName);
        addHistory(cityName);
    }

    function addHistory(cityName){
        var historyButton = $("<button>");
        historyButton.addClass("list-group-item");
        historyButton.text(cityName);
        $("#search-history").prepend(historyButton);
    }

    function historySearch(){
        var cityName = $(this).text();
        renderWeather(cityName);
    }

    $("#search-button").on("click", search);
    $("#search-history").on("click","button", historySearch)




});

/* <div class="card" style="width: 18rem;" id="five-day-forecast">
              <div class="card-body">
                <h5 class="card-title">Date</h5>
                <h6 class="card-subtitle mb-2 text-muted">Temperature:</h6>
                <p class="card-text">Humdity:</p>
              </div>
            </div> */
        //     var newCard = $("<div>");
        // newCard.addClass("card-body");
        // var h5 = $("<h5>");
        // h5.addClass("card-title");