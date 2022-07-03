/* 
    Responde a la ruta 
    /api/autorizaciones
*/
const { Router } = require('express');
const router = Router();

const {
    autorizPendiente
} = require('../controllers/autorizaciones');

router.get('/', autorizPendiente); //Trae Autorizaciones Pendientes

module.exports = router;