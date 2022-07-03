/* 
    Responde a la ruta 
    /api/login
*/
const { Router } = require('express');
const router = Router();

const {
   login
} = require('../controllers/login');

router.post('/', login); //Crea una Orden de Compra

module.exports = router;