import express from "express";
import {
  activateUser,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
} from "../controllers/user.controller";
import { authorizationRoles, isAunthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login-user", loginUser);
userRouter.get("/logout", isAunthenticated, logoutUser);
userRouter.get("/refreshtoken", updateAccessToken);
userRouter.get("/me/:id", isAunthenticated, getUserInfo);
userRouter.post("/social-auth",socialAuth);
userRouter.put("/update-user",isAunthenticated,updateUserInfo);
userRouter.put("/update-user-password",isAunthenticated,updatePassword);
userRouter.put("/update-user-profile-picture",isAunthenticated, updateProfilePicture);

export default userRouter;
