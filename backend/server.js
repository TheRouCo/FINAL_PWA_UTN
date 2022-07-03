//Configuración de las librerías que utilizaremos
const express = require('express');
const cors = require("cors");
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;

//Configuración de los Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    //origin: 'http://127.0.0.1:3001'
}));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

//Configuración del puerto del Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
app.on('error', (err) => {
    console.log(`Se ha producido un error: ${err}`);
});

//Configurar las Rutas de mi aplicación - API's
app.use('/api/login', require('./routes/login'));

app.use('/api/compra', require('./routes/compra'));

app.use('/api/consulta', require('./routes/consulta'));

app.use('/api/autorizaciones', require('./routes/autorizaciones'));

app.use('/api/autorizar', require('./routes/autorizar'));

app.use('/api/rechazar', require('./routes/rechazar'));

app.use('/api/presupuesto', require('./routes/presupuesto'));

