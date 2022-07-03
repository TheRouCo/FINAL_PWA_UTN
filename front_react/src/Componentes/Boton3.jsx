import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Boton3 = () => {
  return (
    <>
      <Container>
        <Card bg={"light"} >
          <Card.Body className="text-center">
            <Card.Title className="text-center">Gestión de Presupuesto</Card.Title>
            <Card.Text className="text-center">Consulta y Seguimiento de Presupuesto</Card.Text>
            <Button href="/presupuesto" variant="dark">Presupuesto</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Boton3;