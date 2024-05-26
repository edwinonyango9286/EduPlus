import express from "express";
import { authorizationRoles, isAunthenticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestion,
  addRepplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  getAllCourses,
  getAllCoursesAdmin,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
const courseRoute = express.Router();

courseRoute.post(
  "/create-course",
  isAunthenticated,
  authorizationRoles("admin"),
  uploadCourse
);
courseRoute.put(
  "/edit-course/:id",
  isAunthenticated,
  authorizationRoles("admin"),
  editCourse
);
courseRoute.get("/get-single-course/:id", getSingleCourse);
courseRoute.get("/get-all-courses", getAllCourses);
courseRoute.get("/get-course-content/:id", isAunthenticated, getCourseByUser);
courseRoute.put("/add-question", isAunthenticated, addQuestion);
courseRoute.put("/add-answer", isAunthenticated, addAnswer);
courseRoute.put("/add-review/:id", isAunthenticated, addReview);
courseRoute.put(
  "/add-repply",
  isAunthenticated,
  authorizationRoles("admin"),
  addRepplyToReview
);
courseRoute.get(
  "/get-all-courses",
  isAunthenticated,
  authorizationRoles("admin"),
  getAllCoursesAdmin
);
courseRoute.delete(
  "/delete-course/:id",
  isAunthenticated,
  authorizationRoles("admin"),
  deleteCourse
);

export default courseRoute;
