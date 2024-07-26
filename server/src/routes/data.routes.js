import { Router } from "express";
import { getData, sendData } from "../controllers/data.controllers.js";


const router = Router();

router.route("/data").post(
    sendData
)
router.route("/chart").get(
    getData
)

export default router