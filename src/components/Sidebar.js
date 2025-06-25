// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className='p-5 shadow-lg w-48'>
//       <h1>Subscription</h1>
// <ul>
//   <li> Music</li>
//   <li> Sport</li>
//   <li> Gaming</li>
//   <li> Movie</li>
// </ul>
// </div>
//   )
// }

// export default Sidebar


import React from 'react';
import { Home, Compass, Video, ThumbsUp, Clock, Download, History, Music, Dribbble, Gamepad2, Film } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
                             
const isMenuOpen = useSelector((store) => store.app.isMenuOpen);   //sidebar menu component subcribing to the store

if(!isMenuOpen) return null;   //early return pattern
  return (
    <div className="w-60 p-4 shadow-md h-screen">
      
      <ul className="space-y-2 mb-6">
        <li>
        <Link to="/" className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
        <Home size={18} /> <span>Home</span></Link> 
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Compass size={18} /> <span>Explore</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Video size={18} /> <span>Shorts</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <History size={18} /> <span>History</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <ThumbsUp size={18} /> <span>Liked Videos</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Clock size={18} /> <span>Watch Later</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Download size={18} /> <span>Downloads</span>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Subscriptions</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Music size={18} /> <span>Music</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Dribbble size={18} /> <span>Sport</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Gamepad2 size={18} /> <span>Gaming</span>
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Film size={18} /> <span>Movie</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;