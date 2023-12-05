export const welcomeController = {
  // Initial index page to display with view data to pass in
  index(request, response) {
    const viewData = {
      title: "Welcome to WeatherTop",
    };
    console.log("Welocome rendering");
    response.render("welcome-view", viewData);
  },
};
