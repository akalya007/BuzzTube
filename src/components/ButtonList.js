// import React from 'react'
// import Button from './Button'

// const ButtonList = () => {  //ButtonList cintains the list of Button Component.
//   return (
//     <div className='flex'>
// <Button name={ "All"}/>
// <Button name={ "Games"}/>
// <Button name={ "Movies"}/>
// <Button name={ "Songs"}/>
// <Button name={ "News"}/>
// <Button name={ "Dramas"}/>
// <Button name={ "Software"}/>
// <Button name={ "Electrical"}/>


//     </div>
//   )
// }

// export default ButtonList


import React from 'react';
import Button from './Button';

const categories = [
  "All", "News", "Tamil television drama", "Podcasts", "Awards", "Mixes", "Web series", 
  "Live", "Brides", "JavaScript", "Data Structures", "Costumes", "Presentation", 
  "Music", "Gaming", "Frontend", "Backend", "Movies", "DevOps", "AI", "React"
];

const ButtonList = () => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap px-4 py-2 scrollbar-hide ">
      <div className="flex space-x-3">
        {categories.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
