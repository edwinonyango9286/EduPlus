import express from "express";
import {
  activateUser,
  deleteUser,
  getAllUsers,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
  updateUserRole,
} from "../controllers/user.controller";
import { authorizationRoles, isAunthenticated } from "../middleware/auth";
const userRoute = express.Router();

userRoute.post("/registration", registrationUser);
userRoute.post("/activate-user", activateUser);
userRoute.post("/login-user", loginUser);
userRoute.get("/logout", isAunthenticated, logoutUser);
userRoute.get("/refreshtoken", updateAccessToken);
userRoute.get("/me/:id", isAunthenticated, getUserInfo);
userRoute.post("/social-auth", socialAuth);
userRoute.put("/update-user", isAunthenticated, updateUserInfo);
userRoute.put("/update-user-password", isAunthenticated, updatePassword);
userRoute.put(
  "/update-user-profile-picture",
  isAunthenticated,
  updateProfilePicture
);

userRoute.get(
  "/get-all-users",
  isAunthenticated,
  authorizationRoles("admin"),
  getAllUsers
);
userRoute.put(
  "/update-user-role",
  isAunthenticated,
  authorizationRoles("admin"),
  updateUserRole
);
userRoute.delete(
  "/update-user-role/:id",
  isAunthenticated,
  authorizationRoles("admin"),
  deleteUser
);

export default userRoute;
