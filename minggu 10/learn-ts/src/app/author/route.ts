import { Router } from "express";
import authorController from "./controller";

const router = Router();
const authorControl = new authorController();

router.get("/", authorControl.get);

export default router;
