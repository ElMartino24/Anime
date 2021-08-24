import {Router} from "express";

import { createAccount, loginAction } from "../controllers/userController.js";
import { userValidation } from "../middleware/userMiddleware.js";
import {loginValidation} from "../middleware/userMiddleware.js";
import { logoutAction } from "../controllers/userController.js";

const router = Router();




//@route POST /api/user/register
//@desc create a Acount
router.post("/register", userValidation, createAccount)


//@route POST /api/user/login
//@desc login a Acount
router.post("/login", loginValidation, loginAction)


router.post("/logout", logoutAction)



export default router;

