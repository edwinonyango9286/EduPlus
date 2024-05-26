import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import { Response } from "express";
import CourseModel from "../models/course.model";

//create course
export const createCourse = CatchAsyncError(
  async (data: any, res: Response) => {
    const course = await CourseModel.create(data);
    res.status(201).json({
      success: true,
      course,
    });
  }
);    
//Get all courses Service
export const getAllCoursesService = 
  async ( res: Response) => {
    const courses = await CourseModel.find().sort({createdAt:-1});
    res.status(200).json({
      success: true, 
      courses,
    });
  }
;



