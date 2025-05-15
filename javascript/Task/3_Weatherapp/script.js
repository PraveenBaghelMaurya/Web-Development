let option = document.querySelector("select");
let display=document.querySelector(".display")



option.addEventListener("click", (ev) => {
  let city_name = option.value;
  let API_key = "b5075b771bcc5d26384949d9245fc7bd";
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
  // console.log(ev.target)

  // console.log(city_name);
  
  if (!city_name) return;

  axios.get(url).then((response) => {
    let data = response.data;
    console.log(data);
    display.innerHTML=`<p><strong>Weather:</strong> ${data.weather[0].description}</p>
                     <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp}K</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>`
  });
});
