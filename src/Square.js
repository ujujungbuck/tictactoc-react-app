import React from "react";
//import styled from "styled-components";

const Square = ( {onClick, value} ) => {
    return(
        
        <button className="square"
        onClick={onClick}>
            {value}
        </button>
    )
}

export default Square