const knex = require('../db/config.js');

const hacerConsulta = (req,res) => {
    knex.select("*").from('compras')
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
    hacerConsulta
}

/*
.then((rows) =>{
    for (row of rows) {
        console.log(`${row['compraID']} ${row['solCompraNum']} ${row['solicitante']} ${row['centrocosto']} ${row['provedor']} ${row['prodServ']} ${row['precio']}`);
        //console.log(result.render);
    }
*/