import { Router } from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createShortUrl } from "../controllers/shortUrlController.js";
const shortURLRouter = Router();




shortURLRouter.post("/", protect, createShortUrl)




export default shortURLRouter;