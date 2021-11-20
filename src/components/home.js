import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Bienvenidos</h1>
                    <Button color="primary" style={{ marginLeft: '10px' }}><Link to='/4' style={{ color: '#FFF' }}>Ir a la Página 4</Link></Button>
                    <Button color="danger" style={{ marginLeft: '10px' }}><Link to='/Hello' style={{ color: '#FFF' }}>Ir a Hello</Link></Button>
                   
                </Col>
            </Row>
        </Container>
    );
    }

export default Home;