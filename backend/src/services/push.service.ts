import prisma from "../config/prisma.js";

export const saveSubscription = async (subscription: any) => {
    return prisma.pushSubscription.upsert({
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
};

export const getSubscriptions = async () => {
    return prisma.pushSubscription.findMany();
};