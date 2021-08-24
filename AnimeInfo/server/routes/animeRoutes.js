import {Router} from "express";

import {isAuth} from "../middleware/isAuthMiddleware.js"
import { blogInput} from "../middleware/animeMiddleware.js";
import { createAnimePost, updateAnime, getAnimes, deleteAnimes} from "../controllers/animeController.js";
import { updateInput} from "../middleware/animeMiddleware.js";

const router = Router();




//@route POST /api/anime/createBlog
//@desc create a Acount
router.post("/createBlog", isAuth , blogInput, createAnimePost)

//@route GET /api/anime/
//@desc get all animes
router.get("", getAnimes)

router.patch("/updateBlog", updateInput, updateAnime)

router.post("/deleteBlog", deleteAnimes)



export default router;

