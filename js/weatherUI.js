class WeatherUI {
  constructor() {
    this.uiContainer = document.querySelector("#drinkingConditions");
  }

  populateUI(data) {
    const temp = String(data.main.feels_like).split('.')[0];

    this.uiContainer.innerHTML = `
      <h3>Our current local drinking conditions</h3>
      <div>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <span>${temp}&#176;</span>
      </div>
      <span>${data.weather[0].description}</span>
    `;
  }
}