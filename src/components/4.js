import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const NumberFour = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>4</h1>
                    <Button color="danger" style={{ marginLeft: '10px' }}><Link to='/Hello' style={{ color: '#FFF' }}>Ir a Hello</Link></Button>
                    <Button color="success" style={{ marginLeft: '10px' }}><Link to='/' style={{ color: '#FFF' }}>Volver al Home</Link></Button>
                </Col>
            </Row>
        </Container>
    );
    }

export default NumberFour;