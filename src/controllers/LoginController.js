const Login = require('../models/Login');

exports.login = async (req, res) => {
  try{
    const data = req.body;
    console.log(data);
    const userDb = await Login.findOne({
      where: {
        user: data.user,
        password: data.password
      }
    });
    res.json(userDb ? true : false);
  } catch (error){
    console.error(error);
    res.status(500).json({error:'Erro Interno'});
  }
};

exports.createLogin = async (req, res) => {
    try{
        const {user, password} = req.body;
        const login = await Login.crate({user, password});
        res.json(login);
    } catch (error) {
        console.error(error)
        res.status(500).json({error:'Erro Interno'});
    }
};