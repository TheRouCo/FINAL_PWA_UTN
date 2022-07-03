import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";

const Compras = () => {
  const [compra, setCompra] = useState({
    SolCompra: "",
    solicitante: "",
    centrocosto: "",
    proveedor: "",
    prodserv: "",
    precio: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (elem) => {
    setCompra({
      ...compra,
      [elem.target.name]: elem.target.value,
    });
    // Chequear si existen errores y removerlos del objeto error
    if (!!errors[elem.target.name])
      setErrors({
        ...errors,
        [elem.target.name]: null,
      });
  };

  const handleCLick = async () => {
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      // Hay Errores!
      setErrors(newErrors);
    } else {
      //No hay errores - Procedo con el envio
      const { data } = await axios.post(
        process.env.REACT_APP_BACK + "api/compra",
        compra
      );
      setCompra({
        SolCompra: "",
        solicitante: "",
        centrocosto: "",
        proveedor: "",
        prodserv: "",
        precio: "",
      });
    }
  };

  const findFormErrors = () => {
    const { SolCompra, solicitante, centrocosto, proveedor, prodserv, precio } =
      compra; //Destructuring
    const newErrors = {};
    // Errores Solicitud de Compra
    if (!SolCompra || SolCompra === "")
      newErrors.SolCompra = "No puede estar en Blanco!";
    else if (SolCompra.length > 6)
      newErrors.SolCompra =
        "La Solicitud de Compra no puede tener más de 6 carácteres";
    // Errores Solicitante
    if (!solicitante || solicitante === "")
      newErrors.solicitante = "Debe ingresar un Solicitante";
    else if (solicitante.length > 30)
      newErrors.solicitante = "El nombre es demasiado largo";
    // Errores Centro de Costo
    if (!centrocosto || centrocosto === "")
      newErrors.centrocosto = "Debe ingresar un Centro de Costo";
    else if (centrocosto.length > 5 || centrocosto.length < 5)
      newErrors.centrocosto = "El Centro de Costo debe tener 5 carácteres";
    // Errores Proveedor
    if (!proveedor || proveedor === "")
      newErrors.proveedor = "Debe especificar un proveedor";
    else if (proveedor.length > 40)
      newErrors.proveedor =
        "El nombre del proveedor no puede tener más de 40 carácteres";
    // Errores Producto o Servicio
    if (!prodserv || prodserv === "")
      newErrors.prodserv =
        "Debe especificar la descripción del Producto o Servicio";
    else if (prodserv.length > 200)
      newErrors.prodserv =
        "El nombre del proveedor no puede tener más de 200 carácteres";
    // Errores Precio
    if (!precio || precio === "" || isNaN(precio))
      newErrors.precio =
        "El campo Precio debe ser numerico y no puede estar en blanco";

    return newErrors;
  };

  return (
    <div className="container px-lg-5">
      <hr></hr>
      {Object.keys(compra).map((key, index) => (
        <Form.Group className="mb-3" key={index}>
          <Form.Label>
            {index === 0
              ? "Solicitud Número"
              : index === 2
              ? "Centro de Costo"
              : index === 4
              ? "Producto o Servicio"
              : key[0].toUpperCase() + key.slice(1)}
          </Form.Label>
          <Form.Control
            name={key}
            value={compra[key]}
            onChange={handleChange}
            isInvalid={!!errors[key]}
          />
          <Form.Control.Feedback type="invalid">
            {errors[key]}
          </Form.Control.Feedback>
        </Form.Group>
      ))}
      <Button size="lg" onClick={handleCLick}>
        Enviar
      </Button>
      <Container className="mb-5"></Container>
    </div>
  );
};

export default Compras;
