import express from "express";

// Middleware for user, user logged in, error and messages
import { attachUser } from "./middleware/attach-user.js";
import { checkUserAuth } from "./middleware/check-user-auth.js";
import { error404 } from "./middleware/error404.js";
import { message } from "./middleware/user-message.js";

// Controllers
import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { stationController } from "./controllers/station-controller.js";
import { welcomeController } from "./controllers/welcome-controller.js";

export const router = express.Router();

// Let the user be available in routes
router.use(attachUser);

// User messages be available in routes
router.use(message);

// Set up public accessible routes
router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);
router.get("/welcome", welcomeController.index);
router.get("/about", aboutController.index);

// Set up restricted routes with check for logged in status
router.get("/dashboard", checkUserAuth(), dashboardController.index);
router.post("/dashboard/addstation", checkUserAuth(), dashboardController.addStation);
router.get("/dashboard/deletestation/:id", checkUserAuth(), dashboardController.deleteStation);
router.get("/station/:id", checkUserAuth(), stationController.index);
router.post("/station/:id/addreading", checkUserAuth(), stationController.addReading);
router.get("/station/:id/deletereading/:readingid", checkUserAuth(), stationController.deleteReading);
router.post("/station/:id/autoreading", checkUserAuth(), stationController.generateReading);
router.get("/profile", checkUserAuth(), accountsController.profile);
router.post("/profile/updateprofile/:_id", checkUserAuth(), accountsController.profileUpdate);
router.get("/deleteaccount/:_id", checkUserAuth(), accountsController.profileDelete);

// 404 pages
router.use(error404);