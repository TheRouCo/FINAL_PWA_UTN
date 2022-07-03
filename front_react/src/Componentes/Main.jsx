import React from "react";
import logo from '../Img/pngwing.png';
import Image from 'react-bootstrap/Image';
import Boton1 from "./Boton1";
import Boton2 from "./Boton2";
import Boton3 from "./Boton3";
import Boton4 from "./Boton4";
import {Row, Col, Container} from "react-bootstrap";


const Main = () => {
  return (
    <>
        <Container>
            <header className="py-5">
                <Container className="px-lg-5">
                    <Container className="p-4 p-lg-5 bg-light rounded-3 text-center">
                        <Image src={logo} width="440" height="300" alt="" fluid/>
                        <Container>
                            <h1 className="display-5 fw-light-ppal">Sistema de Compras</h1>
                            <p className="fs-4-gr">Bienvenido al portal integrado de Gestión de Compras y Control de Presupuesto</p>
                        </Container>
                    </Container>
                </Container>
            </header>
        </Container>
        <Container >
      <Row className="justify-content-md-center">
        <Col className="col-lg-6 col-xxl-4 mb-5">
          <Boton1 />
        </Col>
        <Col className="col-lg-6 col-xxl-4 mb-5">
          <Boton2 />
        </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col className="col-lg-6 col-xxl-4 mb-5">
          <Boton3 />
        </Col>
        <Col className="col-lg-6 col-xxl-4 mb-5">
          <Boton4 />
        </Col>
      </Row>
      </Container >
    </>
  )
}

export default Main