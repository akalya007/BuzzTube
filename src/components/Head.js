import React, { useEffect, useState } from 'react'; // ❌ removed unused 'cache'
import { useDispatch , useSelector } from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */
  useEffect(() => { //make the API CALL for every key press
    const timer = setTimeout(() => { //but if the difference between 2 API call is less than 200ms , then decline the api call
     if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
     }else{
     
      const getSearchSuggestions = async () => {
        console.log("===>", searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(cacheResults({
          [searchQuery]:json[1],
        }));
      };

      getSearchSuggestions();
    }}, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, dispatch, searchCache]); // ✅ fixed eslint warning by adding dispatch and searchCache

  const toggleMenuHandler = () => { //this dispatch the action.
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          alt='hamburger-menu'
          className='h-8 cursor-pointer'
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />

        <a href='/'>
          <img
            alt='youtube-logo'
            className='h-8 mx-2'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      <div className='col-span-10 px-10'>
        <input
          className='w-1/2 border border-gray-400 p-2 rounded-l-full'
          type='text'
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value) }}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false )} //blur means focus out.
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
          🔍
        </button>

        {showSuggestion && ( //if showSuggestion is true then only show that.
          <div className='fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-xl border-gray-100'>
            <ul>
              {suggestions.map((s) => (
                <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100 rounded-md'>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img
          alt='user'
          className='col-span-1 h-8'
          src="https://cdn-icons-png.flaticon.com/512/565/565452.png"
        />
      </div>
    </div>
  );
};

export default Head;

/**
 * Note😀
 * 
 * key - i
 * -render the Component
 * -useEffect();
 * start the timer ==> make the api call after 200ms
 * 
 * 
 * key-ip
 * -if we type before completing 200ms , the it destroys the component (useEffect return method is called. then the new timer is set.)
 * -re-render the Componenet ( if , we type before the 200ms ,the it will trigger the reconcilation method , the component is unmounted , then the useEffect is called second ti me,)
 * -useEffect()
 * -start timer ==> to make api call after 200ms.
 */
