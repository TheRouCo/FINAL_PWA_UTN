/* 
    Responde a la ruta 
    /api/autorizar
*/
const { Router } = require('express');
const router = Router();

const {
    autorizar
} = require('../controllers/autorizar');

router.post('/', autorizar); //Autoriza Una Orden

module.exports = router;