import express from "express"
import { authorizationRoles, isAunthenticated } from "../middleware/auth";
import { createLayout, editLayout, getLayoutByType } from "../controllers/layout.controller";
const layoutRoute = express.Router()

layoutRoute.post("/create-layout",isAunthenticated,authorizationRoles("admin"),createLayout)
layoutRoute.put("/edit-layout",isAunthenticated,authorizationRoles("admin"),editLayout)
layoutRoute.get("/get-layout" ,getLayoutByType)




export default layoutRoute;