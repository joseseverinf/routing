import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const HelloRed = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="redColor">Hello Blue Color</h1>
                    <Button color="dark" style={{ marginLeft: '10px' }}><Link to='/Hello' style={{ color: '#FFF' }}>Volver a Hello</Link></Button>
                    <Button color="dark" style={{ marginLeft: '10px' }}><Link to='/HelloBlue' style={{ color: '#FFF' }}>Volver a Hello Azul</Link></Button>
                    <Button color="primary" style={{ marginLeft: '10px' }}><Link to='/4' style={{ color: '#FFF' }}>Ir a la Página 4</Link></Button>
                    <Button color="success" style={{ marginLeft: '10px' }}><Link to='/' style={{ color: '#FFF' }}>Volver al Home</Link></Button>
                </Col>
            </Row>
        </Container>
    );
    }

export default HelloRed;