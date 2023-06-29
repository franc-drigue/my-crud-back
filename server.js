const express = require('express');
const db = require('./src/models/Db');
const authRoute = require('./src/routes/authRoute');
const cors = require('cors')


const app = express();
const PORT = 5000;

app.use(cors());
// Middleware para processar corpos de requisição JSON
app.use(express.json());

//Conectar ao banco de dados
db.sync()
    .then(()=> {
        console.log('Conexão com o banco de dados estabelecida');
       
    })
    .catch((error)=>{
        console.log('Erro ao conectar o banco de dados', error);
    });


// Usar as rotas
app.use('/auth', authRoute)

//Inicar o servidor
app.listen(PORT,()=>{
    console.log('Servidor iniciado')
})