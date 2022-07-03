/* 
    Responde a la ruta 
    /api/consulta
*/
const { Router } = require('express');
const router = Router();

const {
   hacerConsulta
} = require('../controllers/consulta');

router.get('/', hacerConsulta); //Consulta las Ordenes de Compra

module.exports = router;