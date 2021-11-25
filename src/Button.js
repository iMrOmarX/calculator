import React from 'react'

function Button({type , outputNumber , setoutputNumber ,operation ,ans , setAns ,setoperation}) {

    const doOperation = (operationType , outputNumber , ans) => {
        switch(operationType) {
            case "+":
                return outputNumber + ans ; 
                
            default:
                return 
        }
    }
    
    const clickHandler = () => {
        const parsed = parseInt(type);
        if(isNaN(parsed)) { // if not a number
            switch(type) {
                case "c":
                    setoutputNumber(0);
                    setAns(0);
                    break;
                case "+":
                case "-":
                case "/":
                case "%":
                case "X":
                    
                    setAns(doOperation(type , outputNumber , ans))
                    setoutputNumber(0)
                    setoperation(type)
                    break;
                case "=": 
                    console.log(operation , outputNumber, ans ,doOperation(type , outputNumber ,ans))
                    setoutputNumber(doOperation(operation , outputNumber ,ans));
                    setoperation(null)
                    setAns(0);

                    break;
                default:
                    return 
            }
        }
        else { // if it is a number
            setoutputNumber(outputNumber*10 + parsed)
        }
    }
    return (
        <button onClick={clickHandler}>{type}</button>
    )
}

export default Button
