import axios from "axios";
import { v4 } from "uuid";

export const openWeatherMap = {

  // Make request for weather data form openWeather API
  async generateReading(latitude, longitude, apiKey) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;
    const response = await axios.get(requestUrl);

     // Added date with if statements so dates have 2 digitis if single nunber is returned
     const date = new Date();
     let yyyy = date.getFullYear();
     let mn = date.getMonth() + 1;
     let dd = date.getDate();
     let hh = date.getHours();
     let mm = date.getMinutes();
     let ss = date.getSeconds();
     if (mn < 10) mn = "0" + mn;
     if (dd < 10) dd = "0" + dd;
     if (hh < 10) hh = "0" + hh;
     if (mm < 10) mm = "0" + mm;
     if (ss < 10) ss = "0" + ss;
     let dateTime = yyyy + "-" + mn + "-" + dd + " " + hh + ":" + mm + ":" + ss;

    // Check for response from API server
    if (response.status == 200) {
      const currentWeather = response.data.current;
      // Assign API weather data to new reading
      const newReading = {
        timeStamp: String(dateTime),
        code: Number(currentWeather.weather[0].id),
        temperature: Number(currentWeather.temp),
        windSpeed: Number(currentWeather.wind_speed),
        windDirection: Number(currentWeather.wind_deg),
        pressure: Number(currentWeather.pressure),
      };
      return newReading;
    }

    return null;
  },

  // Get readings for charts
  async getDailyReadingsData(latitude, longitude, apiKey) {
    let report = { labels: [], temperature: [], windSpeed: [], pressure: [] };
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${apiKey}`;

    const response = await axios.get(requestUrl);
    // Check for response from API server
    if (response.status == 200) {
      const trendsData = response.data.daily;
      // Build up array's of data for chart report
      for (let i = 0; i < trendsData.length; i++) {
        const date = new Date(trendsData[i].dt * 1000);
        report.labels.push(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
        report.temperature.push(trendsData[i].temp.day);
        report.windSpeed.push(trendsData[i].wind_speed);
        report.pressure.push(trendsData[i].pressure);
      }
    }
    return report;
  },
};
