/* 
    Responde a la ruta 
    /api/compra
*/
const { Router } = require('express');
const router = Router();

const {
   crearCompra
} = require('../controllers/compra');

router.post('/', crearCompra); //Crea una Orden de Compra

module.exports = router;