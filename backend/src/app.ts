import applicationRoutes from "./routes/application.routes.js";
import express from "express";
import cors from "cors";

import courseRoutes from "./routes/course.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);

app.use("/api/applications", applicationRoutes);

export default app;