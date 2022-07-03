const knex = require('../db/config.js');

const crearCompra = (req,res) => {
    const {SolCompra,solicitante,centrocosto,proveedor,prodserv,precio} = req.body;
  
    knex('compras').insert({
        solCompraNum: SolCompra,
        solicitante:solicitante,
        centrocosto:centrocosto,
        provedor:proveedor,
        prodServ:prodserv,
        precio:precio
    }).then(() =>{
        res.status(200).send({
            SolCompra,
            solicitante,
            centrocosto,
            proveedor,
            prodserv,
            precio      
        });

    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = {
    crearCompra
}


/*



const crearProducto = (req, res) => {

    const { nombre, descripcion, stock } = req.body;

    if (nombre == "" || descripcion == "" || stock == "") {
        let validacion = "Faltan datos para guardar el Producto";
        res.render('producto', { 
            title: 'Formulario de Productos',
            validacion, 
            nombre,
            descripcion,
            stock
        });
    } else {
        knex('producto').insert({
            nombre,
            descripcion,
            stock
        }).then(() =>{
            res. render('productoEnviado', { 
                title: 'Producto Guardado',
            nombre,
            descripcion,
            stock
        });
        })
        .catch(error => {
            console.log(error);
        });
    }
        
    };
    */