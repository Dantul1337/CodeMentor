import prisma from "../config/prisma.js";

export const getAllCourses = async () => {
    return prisma.course.findMany({
        orderBy: {
            id: "asc",
        },
    });
};

export const getCourseById = async (id: number) => {
    return prisma.course.findUnique({
        where: {
            id,
        },
    });
};