import './style.scss';
import React, { useState } from 'react';

import { Calendar } from 'primereact/calendar';

import Sidebar from '../../components/Sidebar/StyledSidebar';

const AllTicketsPage: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  return (
    <div className="page-container">
      <div>
        <Sidebar />
      </div>

      <div className="content-container">
        <Calendar
          value={new Date()}
          onChange={(e) => console.log(e.value)}
        ></Calendar>
      </div>
    </div>
  );
};

export default AllTicketsPage;
