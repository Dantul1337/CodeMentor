import prisma from "../config/prisma.js";

interface CreateApplicationData {
    name: string;
    email: string;
    phone: string;
}

export const createApplication = async (
    data: CreateApplicationData
) => {
    return prisma.application.create({
        data,
    });
};