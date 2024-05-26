import express from "express";
import { authorizationRoles, isAunthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
const orderRoute = express.Router();

orderRoute.post("/create-order", isAunthenticated, createOrder);
orderRoute.get("/get-all-orders", isAunthenticated,authorizationRoles("admin"), getAllOrders);

export default orderRoute;
