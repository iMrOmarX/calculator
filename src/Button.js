import React from 'react'

function Button({type ,  calcState , setCalcState}) {

    const {outputNumber  ,operation ,ans } = calcState;

    // const setState = (state , newValue ) => {
    //     const temp = {...calcState}
    //     temp[state] = newValue;
    //     setCalcState(temp)
    //     console.log(temp)
    // }   

    const doOperation = (operationType , outputNumber , ans) => {
        switch(operationType) {
            case "+":
                
                return outputNumber + ans ; 
            case "X":
                console.log(outputNumber * ans)
                return outputNumber * ans;
            case "/":
                return ans / outputNumber;
            case "-":
                return ans - outputNumber;
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
                        ans:0 ,
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
                        outputNumber:0 ,
                        operation:type
                    })
                    
                    console.log(calcState)
                    break;
                    
                case "=": 
                    console.log(calcState)
                    setCalcState({
                        ...calcState, 
                        ans: 0 ,
                        outputNumber:doOperation(operation , outputNumber ,ans) ,
                        operation:null
                    })
                    
                    break;
                default:
                    return 
            }
        }
        else { // if it is a number
            setCalcState({
                ...calcState, 
                outputNumber:outputNumber*10 + parsed ,
                ans: (ans ===  0)? outputNumber*10 + parsed : calcState.ans
            })
        }
    }
    return (
        <button onClick={clickHandler}>{type}</button>
    )
}

export default Button
