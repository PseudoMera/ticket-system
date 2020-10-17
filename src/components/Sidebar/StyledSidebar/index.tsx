import './style.scss';
import React, { useState } from 'react';
import TicketDescription from '../../ticketDescription';
import { MODAL_MODE } from '../../../constants';
import ModalPortal from '../../Modal';
import CustomSidebar from '../index';

export const StyledSidebar = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const SidebarContent = (): JSX.Element => {
    return (
      <div>
        <h1>Ticket system</h1>
        <ul className="list-container">
          <li
            className={
              selectedOption === 0 ? 'selected-list-item' : 'list-item'
            }
            onClick={() => setSelectedOption(0)}
          >
            <i className="pi pi-home icon-class"></i>Home
          </li>
          <li
            className={
              selectedOption === 1 ? 'selected-list-item' : 'list-item'
            }
            onClick={() => {
              setSelectedOption(1);
              setShowModal(true);
            }}
          >
            <i className="pi pi-ticket icon-class"></i>Create ticket
          </li>
          <li
            className={
              selectedOption === 2 ? 'selected-list-item' : 'list-item'
            }
            onClick={() => {
              setSelectedOption(2);
              localStorage.removeItem('token');
              window.location.reload();
            }}
          >
            <i className="pi pi-sign-out icon-class"></i>Sign out
          </li>
        </ul>
        {showModal && (
          <ModalPortal
            onClose={() => {
              setShowModal(false);
              setSelectedOption(0);
            }}
            width="650px"
          >
            <div>
              <TicketDescription
                mode={MODAL_MODE.CREATE}
                onClose={() => {
                  setShowModal(false);
                }}
              />
            </div>
          </ModalPortal>
        )}
      </div>
    );
  };
  return (
    <CustomSidebar
      baseZIndex={1000000}
      className="sidebar"
      content={<SidebarContent />}
      onHide={() => {}}
      position="left"
      showCloseIcon={false}
      visible={true}
    />
  );
};

export default StyledSidebar;
