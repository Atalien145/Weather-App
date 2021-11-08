getStorage()

//  get storage is check for a key named search and getting the data to display in list items as the users search history
function getStorage() {
    var historyContainer = document.querySelector('.history-container')
    historyContainer.textContent = ""
    var storage = JSON.parse(localStorage.getItem("search"))
    if (storage == null) storage = []
    for (var i = 0; i < storage.length; i++) {
        var btnEl = document.createElement('button')
        btnEl.setAttribute('id', storage[i])
        btnEl.textContent = storage[i]
        historyContainer.prepend(btnEl)

        // event listener that is getting the id of whats clicked on and passing it into the forcast function to display data for city
        btnEl.addEventListener('click', function (e) {
            const id = e.target.id
            forecast(id)
        })
    }
}

// function for getting the city from the search and calling the forcast function passing in the search value
function getCity() {
    const city = document.querySelector(".search-bar").value
    forecast(city)
}


function forecast(city) {
    const apiKey = "06b7b2998e38718e1630a511e86adf26"

    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            console.log('response data', data)

            let { name } = data;
            let { icon, description } = data.weather[0];
            let { temp, humidity } = data.main;
            let { speed } = data.wind

            console.log('the one', temp, speed, name, description, icon, humidity);

            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp + "°F";
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";


            var storage = JSON.parse(localStorage.getItem("search"))
            if (storage == null) storage = []
            storage.push(city)
            localStorage.setItem("search", JSON.stringify(storage))

            getStorage()

            fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey)
                .then(function (response) {
                    return response.json();
                })
                .then(function (fiveData) {


                    console.log('response', fiveData)



                    let { name } = fiveData.city;
                    let { icon, description } = fiveData.list[0].weather[0];
                    let { temp, humidity } = fiveData.list[0].main;
                    let { speed } = fiveData.list[0].wind

                    console.log('another one', name, icon, description, temp, humidity, speed);

                    document.querySelector(".city").innerText = "Weather in " + name;
                    document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                    document.querySelector(".description1").innerText = description;
                    document.querySelector(".temp1").innerText = temp + "°F";
                    document.querySelector(".humidity1").innerText = "Humidity: " + humidity + "%";
                    document.querySelector(".wind1").innerText = "Wind speed: " + speed + " km/h";

                    document.querySelector(".city").innerText = "Weather in " + name;
                    document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                    document.querySelector(".description2").innerText = description;
                    document.querySelector(".temp2").innerText = temp + "°F";
                    document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%";
                    document.querySelector(".wind2").innerText = "Wind speed: " + speed + " km/h";

                    document.querySelector(".city").innerText = "Weather in " + name;
                    document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                    document.querySelector(".description3").innerText = description;
                    document.querySelector(".temp3").innerText = temp + "°F";
                    document.querySelector(".humidity3").innerText = "Humidity: " + humidity + "%";
                    document.querySelector(".wind3").innerText = "Wind speed: " + speed + " km/h";

                    document.querySelector(".city").innerText = "Weather in " + name;
                    document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                    document.querySelector(".description4").innerText = description;
                    document.querySelector(".temp4").innerText = temp + "°F";
                    document.querySelector(".humidity4").innerText = "Humidity: " + humidity + "%";
                    document.querySelector(".wind4").innerText = "Wind speed: " + speed + " km/h";

                    document.querySelector(".city").innerText = "Weather in " + name;
                    document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                    document.querySelector(".description5").innerText = description;
                    document.querySelector(".temp5").innerText = temp + "°F";
                    document.querySelector(".humidity5").innerText = "Humidity: " + humidity + "%";
                    document.querySelector(".wind5").innerText = "Wind speed: " + speed + " km/h";

                })
        })
}


document.querySelector(".search-button").addEventListener("click", getCity)