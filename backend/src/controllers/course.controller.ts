import type { Request, Response } from "express";

import {
    getAllCourses,
    getCourseById,
} from "../services/course.service.js";

export const getCourses = async (
    req: Request,
    res: Response
) => {
    try {
        const courses = await getAllCourses();

        res.json(courses);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getCourse = async (
    req: Request,
    res: Response
) => {
    try {
        const id = Number(req.params.id);

        const course = await getCourseById(id);

        if (!course) {
            return res.status(404).json({
                message: "Course not found",
            });
        }

        res.json(course);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error",
        });
    }
};