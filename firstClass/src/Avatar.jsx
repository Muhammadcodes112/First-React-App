import React from "react";

function Avatar({person, size}){
    return (
        <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt={person.name}
        width={size}
        height={size}
        />
    )
}

export default Avatar;