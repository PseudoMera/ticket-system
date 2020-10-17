import './style.scss';
import React, { useEffect, useState, useContext } from 'react';

import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import Sidebar from '../../components/Sidebar/StyledSidebar';
import UserContext from '../../context/userContext';

import { API } from '../../constants/api';
import { Ticket } from '../../models/ticket';
import { Token } from '../../models/token';
import { getDateFromString } from '../../utils/index';
const AllTicketsPage: React.FC = () => {
  const { data } = useContext(UserContext);
  const [tickets, setTickets] = useState<Ticket[] | null>(null);

  const getTickets = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      const parsedToken: Token = JSON.parse(token);
      const url = data?.isAdmin ? API.getAllTickets : API.tickets;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${parsedToken.accessToken}`,
        },
      });

      const parsedTickets: Ticket[] = await response.json();
      setTickets(parsedTickets);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  const actionBodyTemplate = (rowData: { id: number }) => {
    return (
      <Button
        type="button"
        icon="pi pi-cog"
        className="p-button-secondary"
        onClick={() => console.log(rowData.id)}
      ></Button>
    );
  };

  const dateBodyTemplate = (rowData: { createdAt: string }) => {
    const date = getDateFromString(rowData.createdAt);

    return (
      <React.Fragment>
        <span>
          {date.day}/{date.monthNumber}/{date.year} {date.hour}:{date.minutes}
          {date.amOrPm}
        </span>
      </React.Fragment>
    );
  };

  const statusTemplate = (rowData: { status: string }) => {
    const replacedStatus = rowData.status.replace('_', ' ');
    return (
      <React.Fragment>
        <span className={`user-badge status-${rowData.status}`}>
          {replacedStatus}
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
        {tickets ? (
          <DataTable
            className="p-datatable-striped"
            value={tickets}
            paginator
            rows={8}
            removableSort
            rowHover
            onRowClick={(e) => console.log(e.data)}
          >
            {data?.isAdmin ? (
              <Column
                field="user.firstName"
                header="Name"
                filter
                sortable
              ></Column>
            ) : null}
            {data?.isAdmin ? (
              <Column
                field="user.lastName"
                header="Last Name"
                filter
                sortable
              ></Column>
            ) : null}
            <Column
              className="title-column"
              field="title"
              header="Title"
              filter
              sortable
            ></Column>
            <Column
              field="createdAt"
              header="Published Date"
              body={dateBodyTemplate}
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
            {data?.isAdmin ? (
              <Column
                field="user.email"
                header="Email"
                filter
                sortable
              ></Column>
            ) : null}
            <Column
              body={actionBodyTemplate}
              headerStyle={{ width: '8em', textAlign: 'center' }}
              bodyStyle={{ textAlign: 'center', overflow: 'visible' }}
            />
          </DataTable>
        ) : (
            <h1>Loading...</h1>
          )}
      </div>
    </div>
  );
};

export default AllTicketsPage;