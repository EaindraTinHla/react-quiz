import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import QuizRouter from "./routes/QuizRoute.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";



dotenv.config();
const app = express();
//middleware
app.use(express.json());
app.use(cors());

//Route
app.use('/api/quiz', QuizRouter)
app.use('/api/user', userRouter)

  

const port = process.env.PORT;
const monclient = process.env.DB_URL;
app.listen(port, (e)=>{
    if(e) return console.log(e);
    console.log(`Server running on port ${port}`);

    mongoose.connect(monclient, () =>{
        if(e) return console.log(e);
        console.log('database Connected');

    });
});


