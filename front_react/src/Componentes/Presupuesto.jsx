import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Container, Table } from "react-bootstrap";

const Presupuesto = () => {
  const [presupuesto, setPresupuesto] = useState([]);

  useEffect(() => {
    const getPresupuesto = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_BACK + "api/presupuesto"
      );
      console.log(data.respuesta);
      setPresupuesto(data.respuesta);
    };
    getPresupuesto();
  }, []);

  return (
    <Container className="px-lg-5">
      <Table size="sm">
        <thead>
          <tr>
            <th>Centro de Costo</th>
            <th>Concepto</th>
            <th>Monto Asignado (AR$)</th>
          </tr>
        </thead>
        <tbody>
          {presupuesto
            .slice(0)
            .reverse()
            .map((elem) => (
              <>
                <tr>
                  <td>{`${elem.centroCosto}`}</td>
                  <td>{`${elem.concepto}`}</td>
                  <td>{`${elem.monto}`}</td>
                </tr>
              </>
            ))}
        </tbody>
      </Table>
    </Container>

    // <Container>
    //   <ListGroup>
    //     {presupuesto.map((elem,index) => (
    //       <ListGroup.Item key={index} >
    //         {`${elem.centroCosto} - ${elem.concepto} - ${elem.monto}`}
    //       </ListGroup.Item>
    //     ))}
    //   </ListGroup>
    // </Container>
  );
};

export default Presupuesto;
