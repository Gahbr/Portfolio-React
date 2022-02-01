import express from 'express'; //gerenciador de rotas http
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';



const app = express();

//configuracoes da aplicacao
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configurações de rotas
app.use(usersRoute);

app.use(statusRoute)


//Inicialização do servidor
app.listen (3000, ()=>{
    console.log("Aplicação executando na porta 3000.");
    
})