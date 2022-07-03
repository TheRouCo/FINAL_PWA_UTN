/* 
    Responde a la ruta 
    /api/presupuesto
*/
const { Router } = require('express');
const router = Router();

const {
   consultaPresupuesto
} = require('../controllers/presupuesto');

router.get('/', consultaPresupuesto); //Consulta las Ordenes de Compra

module.exports = router;