import express from 'express';

const router = express.Router();


router.post("/signup",signup);

router.get("/login",(req, res)=>{
    res.json({
        data:"You hit the login endpoint",
    });
});

router.get("/logout",(req, res)=>{
    res.json({
        data:"You hit the logout endpoint",
    });
});

export default router;