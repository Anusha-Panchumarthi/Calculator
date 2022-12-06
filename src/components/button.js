import React from "react";

export default function Button({ val, handleClick }){
    return(
        <button className="btn" name={val} onClick={handleClick}>
            {val}
        </button>
    )
}