const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
    const currentValue = +event.target.value;
    const bodyEl = document.querySelector("body");
  
    switch (event.target.name) {
      case "celsius":
        kelvinEl.value = (currentValue + 273.32).toFixed(2);
        fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
        break;
      case "fahrenheit":
        celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
        kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
        break;
      case "kelvin":
        celsiusEl.value = (currentValue - 273.32).toFixed(2);
        fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
        break;
      default:
        break;
    }
   
    if (currentValue > 40 && currentValue !=69) {
      bodyEl.classList.remove("winter-bg", "moderate-bg","nice");
      bodyEl.classList.add("sunny-bg");
    }
     else if (currentValue == 69){
        bodyEl.classList.remove("winter-bg", "moderate-bg","sunny-bg");
      bodyEl.classList.add("nice");
      }

     else if (currentValue < 15 && currentValue !=69) {
      bodyEl.classList.remove("moderate-bg", "sunny-bg","nice");
      bodyEl.classList.add("winter-bg");
    } else {
      bodyEl.classList.remove("sunny-bg", "winter-bg","nice");
      bodyEl.classList.add("moderate-bg");
    }
  }
  