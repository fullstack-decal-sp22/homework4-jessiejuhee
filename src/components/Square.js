import React from "react";
//import './styles/Square.css';

const Square = ({value, onClick}) => {
    const style = value ? `squares ${value}` : `squares`;
    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;

/*function Square() {
    return (
        <button className="square">
            
        </button>
    )
}

export default Square;*/

