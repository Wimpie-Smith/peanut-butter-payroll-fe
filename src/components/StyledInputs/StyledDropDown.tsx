import React, { useState, useEffect } from "react";
import { staticGenderDropDownOptions } from "../../models/StaticDropdownOptions";

interface IStyledDropDownPorps {
    lable:string;
    onSelect:(selection:string)=>void;
    value:string
    validate?:boolean;
    requiredField?:boolean;
}

export const StyledDropDown:React.FC<IStyledDropDownPorps> = (props) => {
    
    const[isError, setIsError] = useState<boolean>(false);

    useEffect( ()=> {
        if(props.requiredField && props.validate){
            if(props.value){
                setIsError(false);
           } else {
               setIsError(true);
           }
        }  
    },[props.validate, props.value])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onSelect(event.target.value);
    }

    return(
        <div className="input-container">
            <span>{props.lable}{props.requiredField ? ' *' : ''}</span>
            <select style={isError 
                ? {width:'80%', height:'25px', borderColor:'red'} 
                : {width:'80%', height:'25px', borderColor:'black'}
                
            }
            value={props.value}
            onChange={handleChange}
            >
                {staticGenderDropDownOptions.map((option)=>(
                    <option 
                        key={option}
                        value={option} 
                    >{option}
                    </option>
                ))}
            </select>
        </div>
    )
}