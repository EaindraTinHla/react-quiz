import jwt from "jsonwebtoken";
export const requireAuth = async (req, res, next) =>{

// verify authentication
    const { authorization }  = req.headers;

    if(!authorization){
        return res.status(401).json({error:"Authorization Token require"});
    }
   
   const token = authorization.split('')[1];
   try {
     const {_id} = jwt.verify(token, process.env.SECRET);
     req.user = await user.findOne({_id} ).select('_id')
     next();

   } catch (error) {
    console.log(error);
    res.status(401).json({error:"Request is not authorized"});
   }
}

