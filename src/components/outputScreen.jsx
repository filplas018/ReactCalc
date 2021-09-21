import React from "react";
import OutputScreenRow from "./outputScreenRow.jsx";

const OutputScreen = (props) =>{
    return(
        <div className="screen">

            <OutputScreenRow value={props.question}/>
            <OutputScreenRow value={props.question}/>
        </div>
    )
    

}
export default OutputScreen;