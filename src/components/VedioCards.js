// import React from 'react';

// const VedioCards = ({ info }) => {
//   console.log("info", info);

//   // Guard clause to handle undefined info
//   if (!info || !info.snippet) {
//     return null; // or show a fallback UI
//   }

//   const { snippet, statistics } = info;
//   const { title, thumbnails, channelTitle } = snippet;
//   return (
//     <div className=' p-2 m-2 w-72 shadow-lg'>
//         <img className="rounded-lg"  alt=" thumbnail" src={thumbnails.medium.url} />
//       <ul>
//          <li className='font-bold'>{title}</li>
//          <li>{channelTitle}</li>
//          <li>{statistics.viewCount} views</li>
//    </ul>

//     </div>
//   )
// }

// export default VedioCards


import React from 'react';

const VedioCards = ({ info }) => {
  if (!info || !info.snippet) return null;

  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="w-72 m-2 p-2 shadow-md rounded-lg hover:scale-105 transition-transform duration-200">
      <img
        className="w-full h-auto rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul className="mt-2">
        <li className="font-semibold text-sm line-clamp-2">{title}</li>
        <li className="text-xs text-gray-600">{channelTitle}</li>
        {statistics?.viewCount && (
          <li className="text-xs text-gray-500">{statistics.viewCount} views</li>
        )}
      </ul>
    </div>
  );
};

export default VedioCards;
