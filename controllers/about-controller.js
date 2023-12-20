export const aboutController = {
  // Initial index page to display with view data to pass in
  index(request, response) {
    const viewData = {
      title: "About Station",
    };
    console.log("about rendering");
    response.render("about-view", viewData);
  },
};
