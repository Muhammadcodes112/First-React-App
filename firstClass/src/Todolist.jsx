import React from "react";

function Todolist(){
    const person = {
        name: 'Gregorio Y Zara',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    };
    return(
        <div>
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
                <img 
                    className="avatar"
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y. Zara" />
            </div>
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>

        </div>
    )
}

export default Todolist;