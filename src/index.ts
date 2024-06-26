import express, { Request, Response } from "express";
import router from "./routes";
import 'dotenv/config'

const app = express();
const port:any = process.env.PORT || 9000;
const porta = parseInt(port)

app.use(express.json());

app.use(router);

router.get('/',(req: Request, res: Response)=>{
    return res.status(200).send('Seja Bem-vindo(a)')
})

app.listen(porta, ()=>{
    console.log('Servidor funcionando na porta ', porta);
})

export default app;