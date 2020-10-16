import './style.scss';
import React, { useContext } from 'react';

import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import Sidebar from '../../components/Sidebar/StyledSidebar';
import UserContext from '../../context/userContext';

const AllTicketsPage: React.FC = () => {
  const { data } = useContext(UserContext);

  const tickets = [
    {
      id: 1,
      name: 'Jason',
      lastName: 'Guo',
      publishDate: '24/07/2020',
      status: 'open',
      statusTitle: 'Open',
      email: 'jason@curbo.co',
      title: 'Ticket de tu mama',
    },
    {
      id: 2,
      name: 'Jason',
      lastName: 'Guo',
      publishDate: '24/07/2020',
      status: 'in-progress',
      statusTitle: 'In Progress',
      email: 'jason@curbo.co',
      title: 'Ticket de tu papa',
    },
    {
      id: 3,
      name: 'Jason',
      lastName: 'Guo',
      publishDate: '24/07/2020',
      status: 'closed',
      statusTitle: 'Closed',
      email: 'jason@curbo.co',
      title: 'Ticket de tu papa',
    },
    {
      id: 4,
      name: 'Jason',
      lastName: 'Guo',
      publishDate: '24/07/2020',
      status: 'closed',
      statusTitle: 'Closed',
      email: 'jason@curbo.co',
      title: 'Ticket de tu papa',
    },
    {
      id: 5,
      name: 'Jason',
      lastName: 'Guo',
      publishDate: '24/07/2020',
      status: 'closed',
      statusTitle: 'Closed',
      email: 'jason@curbo.co',
      title: 'Ticket de tu papa',
    },
    {
      id: 6,
      name: 'Jason',
      lastName: 'Guo',
      publishDate: '24/07/2020',
      status: 'closed',
      statusTitle: 'Closed',
      email: 'jason@curbo.co',
      title: 'Issue on the new modal that causes crashing on load',
    },
    {
      id: 7,
      name: 'Jason',
      lastName: 'Guo',
      publishDate: '24/07/2020',
      status: 'closed',
      statusTitle: 'Closed',
      email: 'jason@curbo.co',
      title: 'Ticket de tu papa',
    },
    {
      id: 8,
      name: 'Albin',
      lastName: 'Frias',
      publishDate: '24/07/2019',
      status: 'closed',
      statusTitle: 'Closed',
      email: 'jason@curbo.co',
      title: 'Ticket de tu papa',
    },
    {
      id: 9,
      name: 'Jarol',
      lastName: 'Guo',
      publishDate: '24/07/2020',
      status: 'closed',
      statusTitle: 'Closed',
      email: 'jason@curbo.co',
      title: 'Ticket de tu papa',
    },
    {
      id: 10,
      name: 'Jazmine',
      lastName: 'Ke',
      publishDate: '24/07/2020',
      status: 'closed',
      statusTitle: 'Closed',
      email: 'jason@curbo.co',
      title: 'Ticket de tu papa',
    },
  ];

  const actionBodyTemplate = (rowData: { index: number; id: number }) => {
    return (
      <Button
        type="button"
        icon="pi pi-cog"
        className="p-button-secondary"
        onClick={() => console.log(rowData.id, rowData.index)}
      ></Button>
    );
  };

  const statusTemplate = (rowData: { status: string; statusTitle: string }) => {
    return (
      <React.Fragment>
        <span className={`user-badge status-${rowData.status}`}>
          {rowData.statusTitle}
        </span>
      </React.Fragment>
    );
  };

  return (
    <div className="page-container">
      <div>
        <Sidebar />
      </div>

      <div className="content-container">
        <DataTable
          className="p-datatable-striped"
          value={tickets}
          paginator
          rows={8}
        >
          <Column field="name" header="Name" filter sortable></Column>
          <Column field="lastName" header="Last Name" filter sortable></Column>
          <Column
            className="title-column"
            field="title"
            header="Title"
            filter
            sortable
          ></Column>
          <Column
            field="publishDate"
            header="Published Date"
            filter
            sortable
          ></Column>
          <Column
            field="status"
            header="Status"
            body={statusTemplate}
            filter
            sortable
          ></Column>
          <Column field="email" header="Email" filter sortable></Column>
          <Column
            body={actionBodyTemplate}
            headerStyle={{ width: '8em', textAlign: 'center' }}
            bodyStyle={{ textAlign: 'center', overflow: 'visible' }}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default AllTicketsPage;
