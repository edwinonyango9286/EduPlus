import express from "express";
import { authorizationRoles, isAunthenticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrdersAnalytics, getUserAnalytics } from "../controllers/analytics.controller";
const analyticsRoute = express.Router();

analyticsRoute.get(
  "/get-user-analytics",
  isAunthenticated,
  authorizationRoles("admin"),
  getUserAnalytics
);
analyticsRoute.get(
  "/get-courses-analytics",
  isAunthenticated,
  authorizationRoles("admin"),
  getCoursesAnalytics
);
analyticsRoute.get(
  "/get-orders-analytics",
  isAunthenticated,
  authorizationRoles("admin"),
  getOrdersAnalytics
);

export default analyticsRoute;
