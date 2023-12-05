export const maxMin = {
    minMaxReadings(array, minMax) {
      let minVal = null;
      let maxVal = null;   
      minVal = Math.min(...array);
      maxVal = Math.max(...array);
        if (minMax === "min") {
          return minVal;
        } else if (minMax === "max") {
          return maxVal;
        }
      }
};