import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Boton4 = () => {
  return (
    <>
      <Container>
        <Card bg={"light"} >
          <Card.Body className="text-center">
            <Card.Title className="text-center">Consulta de Ordenes de Compras</Card.Title>
            <Card.Text className="text-center">Consultar el estado de las compras</Card.Text>
            <Button href="/consulta" variant="dark">Consultas OC</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Boton4;