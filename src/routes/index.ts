import { Router, Request, Response } from "express";

const router = Router();

import PrimeiraRota from "../controllers/teste";

router.get('/minhaRota', PrimeiraRota);


export default router;