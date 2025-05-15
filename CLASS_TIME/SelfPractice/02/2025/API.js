let output = document.querySelector('.output');
INDEX =0;
let CITIES  = ["","delhi","mumbai","kalkata","punjab"];

async function weather() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITIES[INDEX]}&appid=b5075b771bcc5d26384949d9245fc7bd`);
    let data = await response.json(); 
    return data;  // Return the JSON data
}

function memoize(fn) {
    let cache = {};  // 🔹 Step 1: Create a cache (empty object), In which values are store in key va;ue format {input:output}
    return async function (n) { 
    // console.log(cache[n])

        if (cache[n]) return cache[n]; // 🔹 Step 2: Check if result is already in cache
        console.log("Running Factorial Finding Code"); // Just to see when the calculation happens
        let ans = await fn(n);  // 🔹 Step 3: Compute factorial using the provided function
        return cache[n] = ans;  // 🔹 Step 4: Store the result in cache and return it
    }
}

let fetchWeather=memoize(// Function to display weather information
    async function displayWeather(current_city) {
        let weatherData = await weather(); // Fetch weather data
        // Extract relevant information
        let city = weatherData.name;
        let country = weatherData.sys?.country;
        let tempCelsius = (weatherData.main.temp - 273.15).toFixed(2);
        let feelsLike = (weatherData.main.feels_like - 273.15).toFixed(2);
        let weatherDescription = weatherData.weather[0].description;
        let humidity = weatherData.main.humidity;
        let windSpeed = weatherData.wind.speed;
        let icon = weatherData.weather[0].icon;
    
        // Construct HTML output
        return  `
        <h2>Weather in ${city}, ${country}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
        <p><strong>Temperature:</strong> ${tempCelsius}°C</p>
        <p><strong>Feels Like:</strong> ${feelsLike}°C</p>
        <p><strong>Condition:</strong> ${weatherDescription}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `
    })


async function next(){
    console.log("first")
    INDEX++; // Fetch and display weather data
    if(!CITIES[INDEX]){
    INDEX--;
    }else{let data = await fetchWeather(CITIES[INDEX]);
    output.innerHTML = data;}
}

async function back(){
    if(!CITIES[INDEX]){
        INDEX++;
        }else{let data = await fetchWeather(CITIES[INDEX]);
        output.innerHTML = data;}
}
