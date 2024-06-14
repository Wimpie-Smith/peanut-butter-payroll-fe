import React, { ChangeEvent, useEffect, useState } from "react";

interface IStyledInputProps {
    label:string;
    value:string|number;
    isNumberOnly?:boolean;
    isAlpOnly?:boolean;
    requiredField?:boolean;
    onChange:(value:string|number)=>void;
    disabled? :boolean;
    enableGrouping? : boolean;
    validate?:boolean;

}

export const StyledInput:React.FC<IStyledInputProps> = (props) => {

    const[isError, setIsError] = useState<boolean>(false);

    useEffect( ()=> {
        if (props.requiredField && props.validate) {
            if (props.value) {
                setIsError(false);
           } else {
               setIsError(true);
           }
        }  
    },[props.validate, props.value])

    const inputValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        //handler the input value changes
        // remember to look for the alp and nums only handling.

       let inputValue = event.target.value;

        //if it is only a alphabetical field:
        if (props.isAlpOnly) {
            //only do apls
            const alphabeticRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ -]+$/;

            if (inputValue === '' || alphabeticRegex.test(inputValue)) {
                props.onChange(inputValue);
            }
        }

        if (props.isNumberOnly) {
            const numericRegex = /^[0-9\s]*$/;
        
            // Check if input is empty or contains only digits
            if (inputValue === '' || numericRegex.test(inputValue)) {
                let formattedValue = inputValue;
        
                // If input is not empty and grouping is enabled
                if (inputValue !== '' && props.enableGrouping) {
                    // Remove any existing spaces
                    formattedValue = formattedValue.replace(/\s/g, '');
                    // Parse the input value as a number
                    const numberValue = parseInt(formattedValue, 10);
        
                    // Check if the parsed number is valid
                    if (!isNaN(numberValue)) {
                        // Format the number with grouping
                        formattedValue = numberValue.toLocaleString();
                    } else {
                        formattedValue = '';
                    }
                }
        
                // Update the value
                props.onChange(formattedValue);
            }
        }   
    }
  
    return (
        <div className="input-container">
            <span>{props.label}{props.requiredField ? ' *' : ''}</span>
            <input
             style={isError ? {borderColor:'red'} : {borderColor:'black'} && props.isNumberOnly ? {textAlign:'right'} : {textAlign:'left'}} 
             value={props.value} 
             onChange={inputValueChangeHandler}
             disabled={props.disabled}
             />
        </div>
    )
}