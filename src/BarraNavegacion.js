import React from "react";
import Button from 'react-bootstrap/Button';
import {Col, Row} from 'react-bootstrap';


class BarraNavegacion extends React.Component {
    render() {
        return (
            <>
                <nav className="p-3 mb-2 bg-dark">
                    <ul>
                        <Row>
                        <Col md={2}>
                        <Button variant="dark">Cartelera</Button>
                        </Col>
                        <Col md={2}>
                        <Button variant="dark">Horarios</Button>
                        </Col>
                        <Col md={2}>
                        <Button variant="dark">Precios</Button>
                        </Col>
                        <Col md={2}>
                        <Button variant="dark">Promociones</Button>
                        </Col>
                        <Col md={2}>
                        <Button variant="dark">Comprar</Button>
                        </Col>
                        <Col md={2}>
                        <Button variant="dark">Contacto</Button>
                        </Col>
                        </Row>
                    </ul>
                </nav>
            </>
        );
    }
}

export default BarraNavegacion;