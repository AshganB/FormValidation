
import React , {useState} from "react";

function Counter(props){
    const [count,setCount]= useState(0)
    function handleClick(){
        setCount(count+1);
    }
    
        return <div>
                    <p>{props.title}</p>
                    <p>Count: {count}</p>
                    <button onClick = {handleClick}>Increment</button>

               </div>

    }


export default Counter;