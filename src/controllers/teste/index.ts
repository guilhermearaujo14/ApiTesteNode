import { Request, Response } from "express";

export default function PrimeiraRota(req: Request, res: Response){
    return res.status(200).send('Rota de teste funcionando de forma correta.');
}