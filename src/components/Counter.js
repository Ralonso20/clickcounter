import React from "react";
import '../stylesheets/Counter.css'
function Counter({clicksNumber}){
    return (
        <div className='counter'>
            {clicksNumber}
        </div>
    );
}

export default Counter;