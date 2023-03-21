import express from "express";
import {getQuiz} from "../controllers/QuizController.js";
import { storeQuiz } from "../controllers/QuizController.js";
// import { requireAuth } from "../middleware/requireAuth.js";



const router = express.Router();
//require auth for all quiz route
// router.use(requireAuth);

router.get('/', getQuiz);

router.post('/', storeQuiz);



export default router;