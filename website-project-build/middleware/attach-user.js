import { userStore } from "../models/user-store.js";
// Attach user to routes
export const attachUser = async (request, response, next) => {
  // Get value from cookie userAuth
  const userAuth = request.cookies.userAuth;

  if (userAuth) {
    // If cookie has value set user constant
    const user = await userStore.getUserByEmail(userAuth);

    // Make user available to use in request
    request.user = user;
  }

  // Allow the user to be used in views
  response.locals.user = request.user;
  next();
};