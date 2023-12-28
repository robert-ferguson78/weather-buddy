// Get 404 errors
export const error404 = async (request, response, next) => {
    // Pass in view data to display 404 title
    const viewData = {
      title: "404 - Page Not Found"
    };
    // Displayr custom 404 page
    response.status(404).render("404", viewData);
  };