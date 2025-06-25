import React, { useEffect } from 'react';
import { closeMenu } from '../utils/appSlice';
import {useDispatch} from "react-redux";
import { useSearchParams } from "react-router";


const WatchPage = () => {
const [searchParams] = useSearchParams();
console.log("---",searchParams.get("v"))


const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu());
  },[dispatch])
  return (
    <div className='px-10'>
      <iframe width="1000" 
      height="500"
       src={"https://www.youtube.com/embed/" +searchParams.get("v")} 
       title="YouTube video player"
        frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin"
          allowFullscreen>
          </iframe>


    </div>
  )
}

export default WatchPage