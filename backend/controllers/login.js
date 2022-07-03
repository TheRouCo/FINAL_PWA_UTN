const knex = require('../db/config.js');

const login = (req,res) => {
    // let username = request.body.username;
	// let password = request.body.password;
    console.log(req.body.password)
    console.log(req.body.username)
    if (req.body.username && req.body.password) {
        knex('accounts')
        .where('username',req.body.username)
        .andWhere('password',req.body.password)
        .then((response) => {
            res.status(200).json({  
                token: true,
                session_loggedin: true,
                session_user: response[0].username,
                session_mail: response[0].email
            });
        })
        .catch(error => {
            console.log('Usuario o Contraseña Incorrectos' + error);
            res.status(401).json({  
                token: false,
                session_loggedin: false,
                response: "UserIncorrecto"   
            });
        });
    } else {
        console.log('Por favor ingrese Usuario y Contraseña');
		res.status(100).json({  
            token: false,
            session_loggedin: false,
            response: "UserVacio"    
        });
    }   
}

module.exports = {
    login
}