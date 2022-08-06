const btn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const tempStatus = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault(); //it doesn't automatically reloads the page after form submit
  const cityVal = cityName.value;
  if (!cityVal) {
    //string is empty
    city_name.innerHTML = "Please Write The City Name";
    datahide.classList.add("data_hide");
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5337018fdf305b9742eb18c44ffd2746`;
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      const obj = [jsonResponse];
      city_name.innerHTML = `${obj[0].name}, ${obj[0].sys.country}`;
      temp.innerHTML = obj[0].main.temp;
      const status = obj[0].weather[0].main;
      tempStatus.innerHTML = "abc";
      switch (status) {
        case "Clear":
          tempStatus.innerHTML = `<i class="fa-solid fa-sun"></i>`;
          break;
        case "Clouds":
          tempStatus.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
          break;
        case "Rain":
          tempStatus.innerHTML = `<i class="fa-solid fa-cloud-hail-mixed"></i>`;
          break;
        case "Smoke":
          tempStatus.innerHTML = `<i class="fa-solid fa-smoke"></i>"></i>`;
          break;
        case "Haze":
          tempStatus.innerHTML = `<i class="fa-solid fa-sun-haze"></i>`;
          break;
        case "Mist":
          tempStatus.innerHTML = `<i class="fa-solid fa-cloud-fog"></i>`;
          break;

        default:
          break;
      }
      datahide.classList.remove("data_hide");
    } catch (err) {
      city_name.innerHTML = "City Not Found";
      datahide.classList.add("data_hide");
    }
  }
};

btn.addEventListener("click", getInfo);
