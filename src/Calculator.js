import React from 'react'
import Button from './Button'
import Output from './Output'
import { useState } from 'react'

function Calculator() {

    const [calcState , setCalcState] = useState({
        ans:0 ,
        outputNumber:0,
        operation:null
    }) 
    // TODO : Implement states as one object 
    // TODO: Make buttons types as array 

    const buttons = [
        ["c" , "+-" , "%" , "/"],
        ["7" , "8" , "9" , "X"],
        ["4" , "5" , "6" , "-"],
        ["1" , "2" , "3" , "+"],
        ["0" , "." , "="]
    ]
    return (
        <div>
            <Output outputNumber={calcState.outputNumber}/>

            <div>
                {buttons.map((array ,index ) => {
                    return <div className="row" key={"row-"+index}> 
                        {array.map((btn) => {
                            return <Button type={btn} key={btn} calcState={calcState} setCalcState={setCalcState} />
                        })}
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default Calculator
