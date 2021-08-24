import "dotenv/config"
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"
import userRoutes from "./routes/userRoute.js";
import animeRoutes from "./routes/animeRoutes.js"


const server = express();

const PORT = process.env.PORT || 8080

server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
server.use(express.json())
server.use(cookieParser());


//routes
server.use("/api/checkAuth/", (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
      }
    
  
      try {
          const token = req.cookies.token;
      
          if (!token) {
           return res.json(false)
          }
      
          const verified = jwt.verify(token, process.env.JWT_SECRET);
          
          if(verified){
            return  res.json(true)
          } else {
            return res.json(false)
          }

          
        } catch (err) {
          console.log(err);
          return res.json(false)
        }
})

server.use("/api/user/", userRoutes);

server.use("/api/anime/", animeRoutes);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    server.listen(PORT, () => {
        console.log(`Server & DB is running on Port ${PORT}`)
    })
})
.catch((err) => {
    throw new Error(err)
})


