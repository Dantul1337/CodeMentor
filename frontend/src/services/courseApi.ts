import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
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