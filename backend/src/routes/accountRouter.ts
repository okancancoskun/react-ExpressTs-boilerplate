import {Router} from "express";

const router = Router();

import {AuthController} from "../controllers";

router.post('/register',AuthController.PostRegister);

router.post("/login",AuthController.PostLogin);

export {router};