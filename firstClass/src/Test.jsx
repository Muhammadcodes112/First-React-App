import React from "react";


function Test(){
    const name = 'Greogorio Y. Zara';
    return(
        <div>

            <h2>Test....</h2>

            <div className="inTro">
                <h1>Welcome to my website!</h1>
            </div>
            <p className="summary">
                You can find my thoughts here.
                <br /><br />
                <b>And <i>pictures</i></b> of scientist
            </p>

            <h1>{name}'s To Do List</h1>
        </div>
    )
}
export default Test;