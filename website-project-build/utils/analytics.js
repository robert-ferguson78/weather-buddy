import { readingStore } from "../models/reading-store.js";
import { conversions } from "./conversion.js";
import { maxMin } from "./maxMin.js";
import { trends } from "./trends.js";

export const lastReadings = async (id) => {
  let stationReadings = await readingStore.getReadingsBystationId(id);
  let array = stationReadings;
  let lastReading = null;
  let displayReadings = 0;
  const reading = {
    latestCode: "No Code",
    latestTempC: "No Temp",
    latestTempF: "No Temp",
    latestWindSpeed: "No WindSpeed",
    latestPressure: "No Pressure",
  }
  if(stationReadings.length > 0) {
    lastReading = stationReadings.length - 1;
    reading.latestCode = stationReadings[lastReading].code;
    reading.latestWeatherDescription = conversions.weatherDescription(reading.latestCode);
    reading.latestWeatherIcon = conversions.weatherIcon(reading.latestCode);
    reading.latestWeatherIconFilled = conversions.weatherIconFilled(reading.latestCode);
    reading.latestTempC = stationReadings[lastReading].temperature;
    reading.latestWindSpeedNumber = stationReadings[lastReading].windSpeed;
    reading.latestWindSpeed = conversions.kmToBf(stationReadings[lastReading].windSpeed);
    reading.latestWindSpeedDescription = conversions.windSpeedDescription(reading.latestWindSpeed);
    reading.latestWindSpeedIcon = conversions.windSpeedIcon(reading.latestWindSpeed);
    reading.windDirection = stationReadings[lastReading].windDirection;
    reading.windCompassReading = conversions.windCompassReading(reading.windDirection);
    reading.windChill = conversions.calculateWindChill(reading.latestTempC, reading.latestWindSpeedNumber);
    reading.latestPressure = stationReadings[lastReading].pressure;
    reading.latestTempF = conversions.celsiusToFahrenheit(reading.latestTempC);
    reading.minWindSpeed = maxMin.minMaxReadings(array.map( reading => reading.windSpeed), "min");
    reading.maxWindSpeed = maxMin.minMaxReadings(array.map( reading => reading.windSpeed), "max");
    reading.minPressure = maxMin.minMaxReadings(array.map( reading => reading.pressure), "min");
    reading.maxPressure = maxMin.minMaxReadings(array.map( reading => reading.pressure), "max");
    reading.minTemp = maxMin.minMaxReadings(array.map( reading => reading.temperature), "min");
    reading.maxTemp = maxMin.minMaxReadings(array.map( reading => reading.temperature), "max");
    reading.trendWind = trends.trendDetails(array.map( reading => reading.windSpeed));
    reading.trendTemp = trends.trendDetails(array.map( reading => reading.temperature));
    reading.trendPressure = trends.trendDetails(array.map( reading => reading.pressure));
    reading.displayReadings = stationReadings.length;
  }
  return {
    lastReading: lastReading,
    reading: reading,
  }
};
