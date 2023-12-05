export const message = (request, response, next) => {
  // Assign the error and success messages to request
  request.message = {
    error: request.cookies.message_error,
    success: request.cookies.message_success,
  };

  // Error and Sucess cookies are emptied
  response.clearCookie("message_error");
  response.clearCookie("message_success");

  next();
};