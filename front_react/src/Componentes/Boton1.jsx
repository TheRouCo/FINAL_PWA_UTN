import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Boton1 = () => {
  return (
    <>
      <Container>
        <Card bg={"light"}>
          <Card.Body className="text-center">
            <Card.Title className="text-center">Gestion de Autorizaciones</Card.Title>
            <Card.Text className="text-center">Para gestionar autorizaciones pendientes</Card.Text>
            <Button href="/autorizaciones" variant="dark">Autorizaciones</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Boton1;
