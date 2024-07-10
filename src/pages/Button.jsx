import React from "react";
import "../App.css"



const Button =(props)=>{
    return(<button onClick={props.onClick} className="button-9" role="button">{props.name}</button>
    )
}
export default Button