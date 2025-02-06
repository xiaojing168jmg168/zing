import express from 'express';

const router = express.Router();
import {getMe,signup,login, logout} from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';


router.get("/me", protectRoute, getMe);

router.post("/signup",signup);

router.get("/login",login);

router.post("/logout", logout)

export default router;