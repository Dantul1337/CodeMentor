import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const getCourses = async () => {
    const response = await api.get("/courses");

    return response.data;
};

export const getCourse = async (id: number) => {
    const response = await api.get(`/courses/${id}`);

    return response.data;
};

export const createApplication = async (data: {
    name: string;
    email: string;
    phone: string;
}) => {
    const response = await api.post("/applications", data);

    return response.data;
};

export const subscribeToPush = async (subscription: PushSubscription) => {
    return api.post("/push/subscribe", subscription);
};

export const sendPushNotification = async () => {
    return api.post("/push/send");
};