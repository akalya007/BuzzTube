import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className="flex h-screen">
      <div className="w-60 overflow-y-scroll border-r">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-scroll">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;