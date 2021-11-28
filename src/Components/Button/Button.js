import React from 'react'
import "./button.css"
function Button({type ,  calcState , setCalcState}) {

    const {outputNumber  ,operation ,ans } = calcState;

    const doOperation = (operationType , outputNumber , ans) => {
        switch(operationType) {
            case "+":
                
                return outputNumber + ans ; 
            case "X":
                if(ans === null) {
                    return outputNumber;
                }
                else {
                    return ans * outputNumber
                }
            case "/":
                if(ans === null) {
                    return outputNumber;
                }
                else {
                    return ans / outputNumber;
                }
            case "-":
                if(ans === null) {
                    return outputNumber;
                }
                else {
                    return ans - outputNumber;
                }
            case "%": {
                if(ans === null) {
                    return outputNumber;
                }
                else {
                    return ans % outputNumber;
                }
            }
            
            default:
                return 
        }
    }
    
    const clickHandler = () => {
        const parsed = parseInt(type);

        if(isNaN(parsed)) { // if not a number
            switch(type) {
                case "c":
                    setCalcState({
                        ans:null ,
                        outputNumber:0,
                        operation:null
                    })
                    break;
                case "+":
                case "-":
                case "/":
                case "%":
                case "X":
                    setCalcState({
                        ans: doOperation(type , outputNumber , ans) ,
                        outputNumber:0,
                        operation:type
                    })
                    
                    break;
                    
                case "+-":
                    setCalcState({
                        ...calcState, 
                        outputNumber:-outputNumber
                    })
                    break;
                case "=": 
                    console.log(calcState)
                    setCalcState({
                        ...calcState, 
                        ans: null,
                        outputNumber:doOperation(operation , outputNumber ,ans) ,
                        operation:null
                    })
                    
                    break;
                case "." :
                    setCalcState({
                        ...calcState,
                        isFractal: !calcState.isFractal
                    })
                    break
                default:
                    return 
            }
        }
        else { // if it is a number
            let tempOutput ; 
            if(!calcState.isFractal) {
                tempOutput = (outputNumber >= 0)? outputNumber*10 + parsed : outputNumber*10 - parsed
            }
            else {
                tempOutput = (outputNumber >= 0)? outputNumber + parsed / Math.pow(10, 1 * calcState.digitsAfterPoint)  : outputNumber - parsed /  Math.pow(10, 1 * calcState.digitsAfterPoint)
            }
            setCalcState({
                ...calcState, 
                outputNumber: tempOutput,
                digitsAfterPoint: calcState.digitsAfterPoint+ 1 
            })
            
        }
    }
    return (
        <button className={`button ${type==="="? "equal" : ""}` }  onClick={clickHandler}>{type}</button>
    )
}

export default Button
