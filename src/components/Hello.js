import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Hello = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Hello World</h1>
                    <Button color="secondary" style={{ marginLeft: '10px' }}><Link to='/HelloBlue' style={{ color: '#FFF' }}>Ir a Hello Azul</Link></Button>
                    <Button color="secondary" style={{ marginLeft: '10px' }}><Link to='/HelloRed' style={{ color: '#FFF' }}>Ir a Hello Rojo</Link></Button>
                    <Button color="primary" style={{ marginLeft: '10px' }}><Link to='/4' style={{ color: '#FFF' }}>Ir a la Página 4</Link></Button>
                    <Button color="success" style={{ marginLeft: '10px' }}><Link to='/' style={{ color: '#FFF' }}>Volver al Home</Link></Button>
                </Col>
            </Row>
        </Container>
    );
    }

export default Hello;