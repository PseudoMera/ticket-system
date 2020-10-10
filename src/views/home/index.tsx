import './style.scss';
import React from 'react';

import { Calendar } from 'primereact/calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home: React.FC = () => {
  return (
    <Container>
      <Row sm={12}>
        <Col sm={12}>
          <Calendar
            value={new Date()}
            onChange={(e) => console.log(e.value)}
          ></Calendar>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
