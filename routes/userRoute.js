import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";
// import { requireAuth } from "../middleware/requireAuth.js";


const userRouter = express.Router();
// router api
// userRouter.use(requireAuth);

// login route
userRouter.post('/login', loginUser) ;


// Signup route
userRouter.post('/signup', signupUser) ;

export default userRouter;