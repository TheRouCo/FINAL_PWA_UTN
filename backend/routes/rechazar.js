/* 
    Responde a la ruta 
    /api/rechazar
*/
const { Router } = require('express');
const router = Router();

const {
    rechazar
} = require('../controllers/rechazar');

router.post('/', rechazar); //Autoriza Una Orden

module.exports = router;