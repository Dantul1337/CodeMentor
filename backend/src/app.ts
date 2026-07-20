import applicationRoutes from "./routes/application.routes.js";
import express from "express";
import cors from "cors";

import pushRoutes from "./routes/push.routes.js";
import courseRoutes from "./routes/course.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);

app.use("/api/applications", applicationRoutes);

app.use("/api/push", pushRoutes);

export default app;