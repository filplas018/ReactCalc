import React, { useState, useEffect,  } from 'react';
import OutputScreen from './outputScreen.jsx';
import Button from './button.jsx';


const Calculator = () => {
    const onClick = data => handleClick(data);
    const [data, setValue] = useState("");

    const handleClick = (event) =>{
        const val = event.value;
        console.log(val);


    }


    return (
        <div className="frame">
            <div className="mainCalc">
                <OutputScreen />
                <div className="button-row">
                    <Button label={'Clear'} onClick = {handleClick(onClick)}/>
                    <Button label={'Delete'} onClick = {handleClick(onClick)}/>
                    <Button label={'.'} onClick = {handleClick(onClick)}/>
                    <Button label={'/'} onClick = {handleClick(onClick)}/>
                </div>
                <div className="button-row">
                    <Button label={'7'} onClick = {handleClick(onClick)}/>
                    <Button label={'8'} onClick = {handleClick(onClick)}/>
                    <Button label={'9'} onClick = {handleClick(onClick)}/>
                    <Button label={'*'} onClick = {handleClick(onClick)}/>
                </div>
                <div className="button-row">
                    <Button label={'4'} onClick = {handleClick(onClick)}/>
                    <Button label={'5'} onClick = {handleClick(onClick)}/>
                    <Button label={'6'} onClick = {handleClick(onClick)}/>
                    <Button label={'-'} onClick = {handleClick(onClick)}/>
                </div>
                <div className="button-row">
                    <Button label={'1'} onClick = {handleClick(onClick)}/>
                    <Button label={'2'} onClick = {handleClick(onClick)}/>
                    <Button label={'3'} onClick = {handleClick(onClick)}/>
                    <Button label={'+'} onClick = {handleClick(onClick)}/>
                </div>
                <div className="button-row">
                    <Button label={'0'} onClick = {handleClick(onClick)}/>
                    <Button label={'='} onClick = {handleClick(onClick)}/>
                </div>
            </div>
        </div>
    );
}
export default Calculator;