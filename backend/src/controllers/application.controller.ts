import type { Request, Response } from "express";

import { createApplication } from "../services/application.service.js";

export const create = async (
    req: Request,
    res: Response
) => {
    try {
        const { name, email, phone } = req.body;

        const application = await createApplication({
            name,
            email,
            phone,
        });

        res.status(201).json(application);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error",
        });
    }
};