import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);    
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // 1.const prime = findPrime(text);  //--not memoized.
  
  //2.
  //  const prime = (()=>{   //hence without the useMemo(), it is calculationg the prime number , on every state variable changes[because when the state change it re-render the component , it will do evry thing once again], even when change darktheme.[is we REQUIRE to calculate the prime , when we change the theme ?--NO]
  //   console.log("calculate prime number0", text);    //this is the heavy operation , want to memoize the results of the function.
  //   return findPrime(text);
  // })

  //3
  const prime = useMemo(() => findPrime(text), [text]);//here tex 
  //in the useMemo--first parameter as [the function thwt need to be memoization or the value which it returns] hence the results is memoized.
  //second parameter is the dependency array---catch the resulta bet the re-render until the variable in the dependencies cahnge[until the text changes.]

  return (
    <div className={"m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")    //if darktheme is true,then make as gray with white text.
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Toggle
        </button>
      </div>
      <div>
        <input  //having the input box , for seeing the state change.
          className="border border-black w-72 px-2"   //every time , we type the state variable changes , and it re-renders.
          type="number" value={text}
          onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime : {prime}</h1>
      </div>
    </div>
  );
};
export default Demo;


/**
 * Notes from the vedio
 * ======================😀
 * 
 * useMemo()
 * ========
 * The useMemo hook in React is primarily used for performance optimization.
 *  It allows for the memoization of expensive calculations, preventing them from being re-executed on every render unless their dependencies change.
 * *every tie the state changes , heavy operation takes place , so we ecan memoize the heavy opertion
 * 
 * 
 * 
 * when doing the simple operation , then react is very fast.[foe exmaple calculation the 1st prime number]
 * but when doing the heavy operation ,[like calculation the 7 or more than 7th prime number], it take some time , between that , it freezing my whole page
 * hence such type of issues can be handle using the memoization usi g
 * 
 * useCallback()
 * =============
 * 
 * _--it cache the function definition between the re-renders.
 * 
 */