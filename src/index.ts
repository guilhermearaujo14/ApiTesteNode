import express, { Request, Response } from "express";
import router from "./routes";
import 'dotenv/config'

const app = express();
const port:any = process.env.PORT || 9000;
const porta = parseInt(port)

app.use(express.json());

app.use('/api', router);


app.listen(port, ()=>{
    console.log('Servidor funcionando na porta ', porta);
})

export default app;