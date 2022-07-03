const knex = require('../db/config.js');
const autorizar = (req,res) => {
    const {compraID,solCompraNum,solicitante,centrocosto,proveedor,prodServ,precio,autorizado} = req.body;
    /*Hacer Update a BBDD - Marcando autorizado*/
    knex('compras').where('solCompraNum',solCompraNum)
        .update({
        autorizado: '1',
    }).then(() =>{
        res.redirect("/api/autorizaciones")
    })
    .catch(error => {
        console.log(error);
    });

 }

module.exports = {
    autorizar
}