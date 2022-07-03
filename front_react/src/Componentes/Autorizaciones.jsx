import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Container, Form, Button } from "react-bootstrap";

const Autorizaciones = () => {
  const [autorizacion, setAutorizacion] = useState([]);

  const handleAprobar = async (elem) => {
    await axios
      .post(process.env.REACT_APP_BACK + "api/autorizar", elem)
      .then(() => {
        window.location.reload();
      });
  };

  const handleRechazar = async (elem) => {
    await axios
      .post(process.env.REACT_APP_BACK + "api/rechazar", elem)
      .then(() => {
        window.location.reload();
      });
  };

  useEffect(() => {
    const getAutorizaciones = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_BACK + "api/autorizaciones"
      );
      setAutorizacion(data.respuesta);
    };
    getAutorizaciones();
  }, []);

  return (
    <Container className="px-lg-5">
      {autorizacion.length > 0 ? (
        autorizacion
          .slice(0)
          .reverse()
          .map((elem) => (
            <>
              <Form.Group className="mb-3">
                <hr></hr>
                <Form.Label>{`Orden N°`}</Form.Label>
                <Form.Control readOnly value={elem.solCompraNum}></Form.Control>
                <ListGroup.Item>{`Centro de Costo: ${elem.centrocosto}`}</ListGroup.Item>
                <ListGroup.Item>{`Solicitante: ${elem.solicitante}`}</ListGroup.Item>
                <ListGroup.Item>{`Producto o Servicio: ${elem.prodServ}`}</ListGroup.Item>
                <ListGroup.Item>{`Precio (AR$): ${elem.precio}`}</ListGroup.Item>
                <ListGroup.Item>{`Proveedor: ${elem.provedor}`}</ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="success" onClick={() => handleAprobar(elem)}>
                    Aprobar
                  </Button>
                  <Button variant="danger" onClick={() => handleRechazar(elem)}>
                    Rechazar
                  </Button>
                </ListGroup.Item>

                <hr></hr>
              </Form.Group>
            </>
          ))
      ) : (
        <header className="py-5">
          <Container className="bg-light rounded-3 text-center" >
            <h1 className="display-4">No hay Ordenes de Compra Pendientes de Autorizar</h1>
          </Container>
        </header>
      )}
    </Container>
  );
};

export default Autorizaciones;
