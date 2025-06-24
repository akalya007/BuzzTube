import React from 'react'
import {useDispatch} from "react-redux";
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

const dispatch = useDispatch();
  const toggleMenuHandler =()=>{    //this dispatch the action.
  dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
   <div className='flex col-span-1' >
    <img onClick={()=> toggleMenuHandler()}
    alt='hamburger-menu' className='h-8 cursor-pointer'
     src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" />
  
  <a href='/'>
   <img
   alt='youtube-logo' className='h-8 mx-2'
   src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"/> 
  </a>
  
</div>

<div className='col-span-10 px-10'>
  <input type='text' className='w-1/2 border border-gray-400 p-2 rounded-l-full'/>
  <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'> 🔍</button>

</div>
<div>
  <img alt='user' className='col-span-1 h-8' 
  src="https://cdn-icons-png.flaticon.com/512/565/565452.png" />
</div>
   </div>


  
  )
}

export default Head