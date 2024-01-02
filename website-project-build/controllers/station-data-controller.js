export const stationDataController = {
    // Initial index page to display with view data to pass in
    index(request, response) {
      const viewData = {
        title: "Live Station Data",
      };
      console.log("station data rendering");
      response.render("station-data", viewData);
    },
  };
  