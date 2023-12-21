// Icons, description for readings
const weatherConditions = new Map();
    weatherConditions.set(804, { description: "overcast clouds: 85-100%", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/cloudy", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-cloudy" });
    weatherConditions.set(803, { description: "broken clouds: 51-84%", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/partly-cloudy-day", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-partly-cloudy-day" });
    weatherConditions.set(802, { description: "scattered clouds: 25-50%", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/cloud-up", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-cloud-up" });
    weatherConditions.set(801, { description: "few clouds: 11-25%", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/cloud-up", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-cloud-up" });
    weatherConditions.set(800, { description: "clear sky", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/clear-day", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-clear-day" });
    weatherConditions.set(781, { description: "tornado", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/tornado", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-tornado" });
    weatherConditions.set(771, { description: "squalls", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-alert", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-wind-alert" });
    weatherConditions.set(762, { description: "volcanic ash", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/dust-wind", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-dust-wind" });
    weatherConditions.set(761, { description: "dust", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/dust", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-dust" });
    weatherConditions.set(751, { description: "sand", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/pollen", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-pollen" });
    weatherConditions.set(741, { description: "fog", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/fog", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-fog" });
    weatherConditions.set(731, { description: "sand/dust whirls", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/hurricane", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-hurricane" });
    weatherConditions.set(721, { description: "haze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/haze", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-haze" });
    weatherConditions.set(711, { description: "smoke", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/smoke", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-smoke" });
    weatherConditions.set(701, { description: "mist", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/mist", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-mist" });
    weatherConditions.set(622, { description: "heavy shower snow", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-day-snow", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-day-snow" });
    weatherConditions.set(621, { description: "shower snow", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/snow", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-snow" });
    weatherConditions.set(620, { description: "light shower snow", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/snow", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-snow" });
    weatherConditions.set(616, { description: "rain and snow", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/snowflake", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-snowflake" });
    weatherConditions.set(615, { description: "light rain and snow", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-sleet", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-sleet" });
    weatherConditions.set(613, { description: "shower sleet", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/sleet", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-sleet" });
    weatherConditions.set(612, { description: "light shower sleet", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/sleet", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-sleet" });
    weatherConditions.set(611, { description: "sleet", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/sleet", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847filled-sleet" });
    weatherConditions.set(602, { description: "heavy snow", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/snowflake", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-snowflake" });
    weatherConditions.set(601, { description: "snow", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/snow", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-snow" });
    weatherConditions.set(600, { description: "light snow", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/snow", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-snow" });
    weatherConditions.set(531, { description: "ragged shower rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/raindrops", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-raindrops" });
    weatherConditions.set(522, { description: "heavy intensity shower rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-rain" });
    weatherConditions.set(521, { description: "shower rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-rain" });
    weatherConditions.set(520, { description: "light intensity shower rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/drizzle", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-drizzle" });
    weatherConditions.set(511, { description: "freezing rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/overcast-hail", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-overcast-hail" });
    weatherConditions.set(504, { description: "extreme rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-rain" });
    weatherConditions.set(503, { description: "very heavy rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-rain" });
    weatherConditions.set(502, { description: "heavy intensity rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-rain" });
    weatherConditions.set(501, { description: "moderate rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-rain" });
    weatherConditions.set(500, { description: "light rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/drizzle", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-drizzle" });
    weatherConditions.set(321, { description: "shower drizzle", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/drizzle", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-drizzle" });
    weatherConditions.set(314, { description: "heavy shower rain and drizzle", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-rain" });
    weatherConditions.set(313, { description: "shower rain and drizzle", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-rain" });
    weatherConditions.set(312, { description: "heavy intensity drizzle rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-day-drizzle", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-day-drizzle" });
    weatherConditions.set(311, { description: "drizzle rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/drizzle", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-drizzle" });
    weatherConditions.set(310, { description: "light intensity drizzle rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-day-drizzle", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-day-drizzle" });
    weatherConditions.set(302, { description: "heavy intensity drizzle", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-day-drizzle", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-extreme-day-drizzle" });
    weatherConditions.set(301, { description: "drizzle", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/drizzle", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-drizzle" });
    weatherConditions.set(300, { description: "light intensity drizzle", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/drizzle", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-drizzle" });
    weatherConditions.set(232, { description: "thunderstorm with heavy drizzle", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms-extreme-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms-extreme-rain" });
    weatherConditions.set(231, { description: "thunderstorm with drizzle", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms-rain" });
    weatherConditions.set(230, { description: "thunderstorm with light drizzle", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms-rain" });
    weatherConditions.set(221, { description: "ragged thunderstorm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms" });
    weatherConditions.set(212, { description: "heavy thunderstorm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms-extreme", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms-extreme" });
    weatherConditions.set(211, { description: "thunderstorm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms" });
    weatherConditions.set(210, { description: "light thunderstorm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms" });
    weatherConditions.set(202, { description: "thunderstorm with heavy rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms-night-extreme-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms-night-extreme-rain" });
    weatherConditions.set(201, { description: "thunderstorm with rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms-rain" });
    weatherConditions.set(200, { description: "thunderstorm with light rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms-rain", filled: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/filled-thunderstorms-rain" });

const WindSpeed = new Map();
    WindSpeed.set(0, { description: "Calm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-0" });
    WindSpeed.set(1, { description: "Light Air", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-1" });
    WindSpeed.set(2, { description: "Light Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-2" });
    WindSpeed.set(3, { description: "Gentle Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-3" });
    WindSpeed.set(4, { description: "Moderate Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-4" });
    WindSpeed.set(5, { description: "Fresh Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-5" });
    WindSpeed.set(6, { description: "Strong Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-6" });
    WindSpeed.set(7, { description: "Near Gale", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-7" });
    WindSpeed.set(8, { description: "Gale", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-8" });
    WindSpeed.set(9, { description: "Severe Gale", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-9" });
    WindSpeed.set(10, { description: "Strong storm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-10" });
    WindSpeed.set(11, { description: "Violent Storm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-11" });

export const conversions = {
    celsiusToFahrenheit(temperature) {
      const calc = (temperature * 1.8) + 32;
      return Math.round(calc * 100.00) / 100.00;
    },

    kmToBf(windSpeed) {
        if (windSpeed <= 1) {
          return 0;
        } else if (windSpeed > 1 && windSpeed <= 5) {
          return 1;
        } else if (windSpeed >= 6 && windSpeed <= 11) {
          return 2;
        } else if (windSpeed >= 12 && windSpeed <= 19) {
          return 3;
        } else if (windSpeed >= 20 && windSpeed <= 28) {
          return 4;
        } else if (windSpeed >= 29 && windSpeed <= 38) {
          return 5;
        } else if (windSpeed >= 39 && windSpeed <= 49) {
          return 6;
        } else if (windSpeed >= 50 && windSpeed <= 61) {
          return 7;
        } else if (windSpeed >= 62 && windSpeed <= 74) {
          return 8;
        } else if (windSpeed >= 75 && windSpeed <= 88) {
          return 9;
        } else if (windSpeed >= 89 && windSpeed <= 102) {
          return 10;
        } else if (windSpeed >= 103 && windSpeed <= 117) {
          return 11;
        } else {
          return 11;
        }
      },

      weatherDescription(code) {
        return weatherConditions.get(code).description;
      },
    
      weatherIcon(code) {
        return weatherConditions.get(code).icon;
      },

      weatherIconFilled(code) {
        return weatherConditions.get(code).filled;
      },

      windSpeedDescription(code) {
        return WindSpeed.get(code).description;
      },
    
      windSpeedIcon(code) {
        return WindSpeed.get(code).icon;
      },

      windCompassReading(degreeToConvert) {
        let windDirectionText = "No Reading";
        if ((degreeToConvert > 348.75 && degreeToConvert <= 360) || (degreeToConvert >= 0 && degreeToConvert <= 11.25)) {
          windDirectionText = "North";
        } else if (degreeToConvert > 11.25 && degreeToConvert <= 33.75) {
          windDirectionText = "North North East";
        } else if (degreeToConvert > 33.75 && degreeToConvert <= 56.25) {
          windDirectionText = "North East";
        } else if (degreeToConvert > 56.25 && degreeToConvert <= 78.75) {
          windDirectionText = "East North East";
        } else if (degreeToConvert > 78.75 && degreeToConvert <= 101.25) {
          windDirectionText = "East";
        } else if (degreeToConvert > 101.25 && degreeToConvert <= 123.75) {
          windDirectionText = "East South East";
        } else if (degreeToConvert > 123.75 && degreeToConvert <= 146.25) {
          windDirectionText = "South East";
        } else if (degreeToConvert > 146.25 && degreeToConvert <= 168.75) {
          windDirectionText = "South South East";
        } else if (degreeToConvert > 168.75 && degreeToConvert <= 191.25) {
          windDirectionText = "South";
        } else if (degreeToConvert > 191.25 && degreeToConvert <= 213.75) {
          windDirectionText = "South South West";
        } else if (degreeToConvert > 213.75 && degreeToConvert <= 236.25) {
          windDirectionText = "South West";
        } else if (degreeToConvert > 236.25 && degreeToConvert <= 258.75) {
          windDirectionText = "West South West";
        } else if (degreeToConvert > 258.75 && degreeToConvert <= 281.25) {
          windDirectionText = "West";
        } else if (degreeToConvert > 281.25 && degreeToConvert <= 303.75) {
          windDirectionText = "West North West";
        } else if (degreeToConvert > 303.75 && degreeToConvert <= 326.25) {
          windDirectionText = "North West";
        } else if (degreeToConvert > 326.25 && degreeToConvert <= 348.75) {
          windDirectionText = "North North West";
        } else {
          windDirectionText = "Error";
        }
        return windDirectionText;
      },

      calculateWindChill(temperature, windSpeed) {
        let windChill = 0;
        windChill = 13.12 + (0.6215 * temperature) - 11.37 * (Math.pow(windSpeed, 0.16))
            + (0.3965 * temperature) * (Math.pow(windSpeed, 0.16));
        return Math.round(windChill * 100.0) / 100.0;
      },

};