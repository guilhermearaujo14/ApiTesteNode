import { Router, Request, Response } from "express";

const router = Router();

import PrimeiraRota from "../controllers/teste";

router.get('/',(req: Request, res: Response)=>{
    return res.status(200).send('Seja Bem-vindo(a)')
})

router.get('/minhaRota', PrimeiraRota);


export default router;