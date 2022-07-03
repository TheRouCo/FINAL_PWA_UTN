const knex = require('../db/config.js');

const consultaPresupuesto = (req,res) => {
    knex.select("*").from('presupuesto')
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
    consultaPresupuesto
}