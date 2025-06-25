import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex h-screen">
      {isMenuOpen && (
        <div className="w-60 overflow-y-scroll border-r">
          <Sidebar />
        </div>
      )}
      <div className={`overflow-y-scroll ${isMenuOpen ? 'flex-1' : 'w-full'}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
