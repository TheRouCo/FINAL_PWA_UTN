import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Container } from "react-bootstrap";

const Consulta = () => {
  const [consulta, setConsulta] = useState([]);

  useEffect(() => {
    const getConsultas = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_BACK + "api/consulta"
      );
      console.log(data.respuesta);
      setConsulta(data.respuesta);
      console.log(consulta.length);
    };
    getConsultas();
  }, []);

  return (
    <Container className="px-lg-5">
      <ListGroup>
        {consulta.length > 0 ? (
          consulta
            .slice(0)
            .reverse()
            .map((elem) => (
              <>
                <hr></hr>
                <ListGroup.Item variant="dark">{`Orden N°: ${elem.solCompraNum}`}</ListGroup.Item>
                <ListGroup.Item variant="light">{`Centro de Costo: ${elem.centrocosto}`}</ListGroup.Item>
                <ListGroup.Item variant="light">{`Solicitante: ${elem.solicitante}`}</ListGroup.Item>
                <ListGroup.Item variant="light">{`Producto o Servicio: ${elem.prodServ}`}</ListGroup.Item>
                <ListGroup.Item variant="light">{`Precio (AR$): ${elem.precio}`}</ListGroup.Item>
                <ListGroup.Item variant="light">{`Proveedor: ${elem.provedor}`}</ListGroup.Item>
                {elem.autorizado === 1 ? (
                  <ListGroup.Item variant="success">
                    {"Estado: Autorizado"}
                  </ListGroup.Item>
                ) : elem.autorizado === -1 ? (
                  <ListGroup.Item variant="danger">
                    {"Estado: Rechazado"}
                  </ListGroup.Item>
                ) : (
                  <ListGroup.Item variant="warning">
                    {"Estado: Sin Procesar"}
                  </ListGroup.Item>
                )}
                <hr></hr>
              </>
            ))
        ) : (
          <header className="py-5">
            <Container className="bg-light rounded-3 text-center">
              <h1 className="display-4">
                No hay Ordenes de Compra Cargadas para Consultar
              </h1>
            </Container>
          </header>
        )}
      </ListGroup>
    </Container>
  );
};
export default Consulta;
