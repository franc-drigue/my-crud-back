const Sequelize = require('sequelize');
const db = require('./Db');

const Login = db.define('login', {
    user:{
        type:Sequelize.STRING,
        allowNull:false,
        timestamps: true,
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false,
        timestamps: true,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: true
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
    }
})

db.sync() // Use { force: true } se quiser recriar a tabela
  .then(() => {
    console.log('Sincronização concluída com sucesso.');
  })
  .catch((error) => {
    console.error('Erro durante a sincronização:', error);
  });


module.exports = Login;