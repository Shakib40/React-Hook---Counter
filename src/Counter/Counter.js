import React from "react";
import { useState } from 'react'

const  Counter = ( {add, sub, multiple}) => {
    const  [count , setCount] = useState(0);

    const addOne = (value) => {
        // setCount( count + value);
        setCount((prev) =>{
          if(value == 2){
            return prev * value;
          }
          return prev + value;

        });
    };
  
    return (
        <div> 
            <h3> Counter:{count}</h3>   
            <button onClick={ () => addOne(add) }>Increase</button>
            <button onClick={ () => addOne(sub) }>Decrease</button>
            <button onClick={ () => addOne(multiple) }>Decrease</button>
          <p>{count % 2 == 0 ? "Even" : "Odd" }</p>
      </div>
    );
}

export default Counter;