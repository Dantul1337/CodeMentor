import { Router } from "express";

import {
    subscribe,
    sendNotification,
} from "../controllers/push.controller.js";

const router = Router();

router.post("/subscribe", subscribe);

router.post("/send", sendNotification);

export default router;