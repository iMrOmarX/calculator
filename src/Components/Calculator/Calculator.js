import React from 'react'
import Button from '../Button/Button'
import Output from '../Output/Output'
import { useState } from 'react'
import "../../App.css"
import "./calculator.css"

function Calculator() {

    const [calcState , setCalcState] = useState({
        ans:null ,
        outputNumber:0,
        operation:null,
        isFractal: false,
        digitsAfterPoint: 0
    }) 
    // TODO : Implement states as one object 
    // TODO: Make buttons types as array 

    const buttons = [
        "c" , "+-" , "%" , "/",
        "7" , "8" , "9" , "X",
        "4" , "5" , "6" , "-",
        "1" , "2" , "3" , "+",
        "0" , "." , "="
    ]


    return (
        <div className="center calculator">
            <Output outputNumber={calcState.outputNumber}/>

            <div className="buttons-container">
                {buttons.map((btn ,index ) => {

                    return <Button type={btn} key={btn} calcState={calcState} setCalcState={setCalcState} />
                        
                })}
            </div>
            
        </div>
    )
}

export default Calculator
