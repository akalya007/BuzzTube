import React, { useEffect, useState } from 'react'
import { YOUTUBE_VEDIO_API } from '../utils/constant';
import VedioCards from './VedioCards';


const VedioContainer = () => {

const [vedios , setvedios] = useState([]);

useEffect(()=>{
  getVedios();
},[]);

  const getVedios = async ()=>{
    const data = await fetch(YOUTUBE_VEDIO_API);
    const json = await data.json();
    //console.log("===>",json.items);
    setvedios(json.items);
  }

  return (
//     <div className="flex flex-wrap overflow-y-hidden h-[calc(100vh-100px)]">
//   {vedios.map(vedio =>( 
//     <VedioCards key={vedio.id} info={vedio} />))}
// </div>
<div className="flex flex-wrap justify-center gap-4 ">
  {vedios.map((vedio) => (
    <VedioCards key={vedio.id} info={vedio} />
  ))}
</div>

  )
}

export default VedioContainer