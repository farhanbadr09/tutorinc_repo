import React from 'react';
import ReactDOM from 'react-dom/client';

function Football(){
    const shot = () => {
        alert("Great Shoot!");
    }
    return (
        <button onClick={shot}>Take Shoot</button>
    )
}

export default Football;



