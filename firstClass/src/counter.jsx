import React, { useState } from "react";

function Counter(){
    const [num, setNum] = useState(2);

    return(
        <div>
            <h1>Counter Component</h1>

            <button>Increase by 1 </button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;