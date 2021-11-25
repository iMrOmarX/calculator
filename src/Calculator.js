import React from 'react'
import Button from './Button'
import Output from './Output'
import { useState } from 'react'

function Calculator() {

    const [ans, setAns] = useState(0)
    const [outputNumber, setoutputNumber] = useState(0)
    const [operation, setoperation] = useState(null)

    const [calcState , setCalcState] = useState({
        ans:0 ,
        outputNumber:0,
        operation:0
    }) // TODO : Implement states as one object 
    // TODO: Make buttons types as array 
    return (
        <div>
            <Output outputNumber={outputNumber}/>
            <div>
                <Button type="c" setoutputNumber={setoutputNumber} setAns={setAns}></Button>
                <Button type="+-"></Button>
                <Button type="%" setoperation={setoperation}></Button>
                <Button type="/" setoperation={setoperation}></Button>

                
                <Button type="9" outputNumber={outputNumber} setoutputNumber={setoutputNumber}></Button>
                <Button type="8" outputNumber={outputNumber} setoutputNumber={setoutputNumber}></Button>
                <Button type="7"></Button>
                <Button type="X" setoperation={setoperation}></Button>

                <Button type="6"></Button>
                <Button type="5"></Button>
                <Button type="4"></Button>
                <Button type="-" setoperation={setoperation}></Button>

                <Button type="3"></Button>
                <Button type="2"></Button>
                <Button type="1"></Button>
                <Button type="+" ans={ans} setAns={setAns} setoperation={setoperation}  operation={operation} outputNumber={outputNumber} setoutputNumber={setoutputNumber}></Button>

                <Button type="0"></Button>
                <Button type="."></Button>
                <Button type="=" ans={ans} setAns={setAns} setoperation={setoperation}   operation={operation} outputNumber={outputNumber} setoutputNumber={setoutputNumber}></Button>

                
            </div>
        </div>
    )
}

export default Calculator
