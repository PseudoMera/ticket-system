import './style.scss';
import React, { useState } from 'react';

import { Calendar } from 'primereact/calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Sidebar from '../../components/Sidebar/StyledSidebar';

const AllTicketsPage: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  return (
    <Container>
      <Row sm={12}>
        <Col sm={2}>
          <Sidebar />
        </Col>
        <Col sm={10}>
          <Calendar
            value={new Date()}
            onChange={(e) => console.log(e.value)}
          ></Calendar>
        </Col>
      </Row>
    </Container>
  );
};

export default AllTicketsPage;
