export const trends = {
    trendDetails (array) {
        if (array.length >= 3) {
            let trendDirection = "fa-arrow-right-arrow-left";
            let trendText = "Steady";
            if ((array[array.length - 1] < array[array.length - 2]) && (array[array.length - 2] < array[array.length - 3])) {
                trendDirection = "fa-arrow-down-short-wide";
                trendText = "Falling";
            } else if ((array[array.length - 1] > array[array.length - 2]) && (array[array.length - 2] > array[array.length - 3])) {
                trendDirection = "fa-arrow-up-wide-short";
                trendText = "Rising";
            }
        let trendDetails = {
            trendDirection: trendDirection,
            trendText: trendText,
        } 
          return trendDetails;
        }
    }
};