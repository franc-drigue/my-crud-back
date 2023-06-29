const Sequelize = require('sequelize');

const db = new Sequelize('mycrud','root','1q2w3e', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
.then(function(){
    console.log('Conexão realizada com o Banco de Dados realizada sucesso!');
}).catch(function(){
    console.log('ERRO: Conexão com o Banco de Dados falhou');
})

module.exports = db;