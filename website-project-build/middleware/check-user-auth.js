// Check for if the user is logged in
export const checkUserAuth = (redirectTo = "/login") => {
    return async (request, response, next) => {
        console.log(`User details: ${JSON.stringify(request.user)}`);
        // redirect to login page if no user is detected
        if(!request.user) {
            response.redirect(redirectTo);
            return;
        }
        next();
    };
};