const knex = require('../db/config.js');

const autorizPendiente = (req,res) => {
    knex.select("*").from('compras').where('autorizado', 0)
    .then((response) => {
        res.status(200).json({  
           respuesta: response   
        });
    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = {
    autorizPendiente
}