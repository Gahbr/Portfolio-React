import express, {Request,Response,NextFunction} from 'express'; //gerenciador de rotas http

const app = express();
app.get('/status', (req: Request, res: Response, next:NextFunction)=> {
    res.status(200).send({foo:'parakeet keetson'})
})

app.listen (3000, ()=>{
    console.log("Aplicação executando na porta 3000.");
    
})