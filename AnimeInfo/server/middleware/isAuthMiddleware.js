import jwt from "jsonwebtoken"


export const isAuth = (req, res, next) => {
    if (req.method === "OPTIONS") {
      return next();
    }
  

    try {
        const token = req.cookies.token;
    
        if (!token) {
         return res.status(401).json("Unauthorized")
        }
    
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.userId;
    
        next();
      } catch (err) {
        console.log(err);
        return res.status(401).json("Unauthorized")
      }
  };
  