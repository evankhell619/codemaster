import { Router } from "express";
import authorsRoute from " ./routes/author.js";
import publishersRoute from " ./routes/publisers.js";

const router = Router();

router.use("/authors", authorsRoute);
router.use(publishersRoute);

export default router;
