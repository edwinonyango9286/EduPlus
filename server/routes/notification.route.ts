import express from "express";
import { authorizationRoles, isAunthenticated } from "../middleware/auth";
import { getNotifications, updateNotification } from "../controllers/notification.controller";

const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  isAunthenticated,
  authorizationRoles("admin"), 
  getNotifications
);
notificationRoute.put(
  "/get-all-notifications/:id", 
  isAunthenticated,
  authorizationRoles("admin"), 
  updateNotification
);

export default notificationRoute;
