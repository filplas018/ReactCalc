import React from "react";
import Calculator from "./calculator";
const Button = (props) =>{
    return(
      <input type="button" value={props.label} onClick = {e=> this.handleClick(e.target.value)} />  
    );
}
export default Button;