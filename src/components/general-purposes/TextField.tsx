import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className?:string;
    label?:string    
}

const TextField = ({className, label, ...rest}: TextFieldProps) => {

    return(
        <div className={className}>
            <span>{label}</span>
            <input  {...rest}/>
        </div>
    )

}


export default styled(TextField)`
    width:100%;
    display:flex;
    flex-direction:column;    
    gap:10px;
    input{
        width:100%;
        height:40px;
        border-radius:5px;        
        &:focus {
            outline:0;
            
        }

    }
`


