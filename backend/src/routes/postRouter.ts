import { Router } from "express";

const router = Router();
import { requireSignIn, userMiddleware, local } from "../middlewares"
import { PostController } from "../controllers";

router.get("/posts", PostController.getAllPost);

router.post('/add-post',requireSignIn,userMiddleware, PostController.addPost);

router.get('/post/:title', PostController.getPostDetail);

export { router };
