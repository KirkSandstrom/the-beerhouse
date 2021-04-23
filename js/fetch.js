class Fetch {
  async getWeather() {
    const myKey = '44757293640e04af3ed6afc554de47b3';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=portsmouth,nh,usa&units=imperial&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}