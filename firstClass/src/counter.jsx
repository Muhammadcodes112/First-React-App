import React, { useState } from "react";

function Counter(){
    const [num, setNum] = useState(2);

    return(
        <div>
            <h1>Counter Component</h1>

            <button onClick={()=> setNum(num + 1)}>Increase by 1 </button>
            <p>{num}</p>

            <button onClick={() => setNum(num - 2)}>Decrease by 1</button>
        </div>
    )
}

export default Counter;