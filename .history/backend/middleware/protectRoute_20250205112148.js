import user from '../models/user.model.js';

export const protectRoute = async (req, res, next) =>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "You need to login first"});
        }
    }catch(error){
            
    }
}