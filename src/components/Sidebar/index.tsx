// import './StyledSidebar/style.scss';
import React from 'react';

import { Sidebar } from 'primereact/sidebar';

type SidebarProps = {
  baseZIndex: number;
  className?: string;
  content: JSX.Element;
  onHide: () => void;
  position: 'left' | 'right';
  showCloseIcon: boolean;
  visible: boolean;
};

export const CustomSidebar = ({
  baseZIndex,
  className,
  content,
  onHide,
  position,
  showCloseIcon,
  visible,
}: SidebarProps) => {
  return (
    <Sidebar
      baseZIndex={baseZIndex}
      className={className}
      onHide={onHide}
      position={position}
      showCloseIcon={showCloseIcon}
      visible={visible}
    >
      {content}
    </Sidebar>
  );
};

export default CustomSidebar;
