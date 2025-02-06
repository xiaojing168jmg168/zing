import express from 'express';

const router = express.Router();
import {signup,login, logout} from '../controllers/auth.controller.js';

router.get("/me", protectRoute, getMe);

router.post("/signup",signup);

router.get("/login",login);

router.post("/logout", logout)

export default router;