import React from 'react';
import './Sidebar.css';
import SidebarFilters from './SidebarFilters/SidebarFilters';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title mb-4">Каталог одягу</h2>
      <SidebarFilters />
    </aside>
  );
};

export default Sidebar;
