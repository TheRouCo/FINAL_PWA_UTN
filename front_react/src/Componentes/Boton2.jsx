import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Boton2 = () => {
  return (
    <>
      <Container>
        <Card bg={"light"} >
          <Card.Body className="text-center">
            <Card.Title className="text-center">Gestión de Compras</Card.Title>
            <Card.Text className="text-center">Ingresar una nueva Solicitud de Compra</Card.Text>
            <Button href="/compras" variant="dark">Compras</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Boton2;