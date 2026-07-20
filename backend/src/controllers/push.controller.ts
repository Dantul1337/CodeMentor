import { Request, Response } from "express";
import webpush from "../config/push.js";
import prisma from "../config/prisma.js";

export const subscribe = async (req: Request, res: Response) => {
    const subscription = req.body;

    await prisma.pushSubscription.upsert({
        where: {
            endpoint: subscription.endpoint,
        },
        update: {
            p256dh: subscription.keys.p256dh,
            auth: subscription.keys.auth,
        },
        create: {
            endpoint: subscription.endpoint,
            p256dh: subscription.keys.p256dh,
            auth: subscription.keys.auth,
        },
    });

    res.json({
        success: true,
    });
};

export const sendNotification = async (_req: Request, res: Response) => {
    const subscriptions = await prisma.pushSubscription.findMany();

    const payload = JSON.stringify({
        title: "CodeMentor",
        body: "🔥 Новый курс уже доступен!",
    });

    for (const subscription of subscriptions) {
        try {
            await webpush.sendNotification(
                {
                    endpoint: subscription.endpoint,
                    keys: {
                        p256dh: subscription.p256dh,
                        auth: subscription.auth,
                    },
                },
                payload
            );
        } catch (error) {
            console.error(error);
        }
    }

    res.json({
        success: true,
    });
};