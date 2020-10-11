import './style.scss';
import React, { useState } from 'react';

import CustomSidebar from '../index';

export const StyledSidebar = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
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
            Home
          </li>
          <li
            className={
              selectedOption === 1 ? 'selected-list-item' : 'list-item'
            }
            onClick={() => setSelectedOption(1)}
          >
            Create ticket
          </li>
          <li
            className={
              selectedOption === 2 ? 'selected-list-item' : 'list-item'
            }
            onClick={() => setSelectedOption(2)}
          >
            Sign out
          </li>
        </ul>
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
