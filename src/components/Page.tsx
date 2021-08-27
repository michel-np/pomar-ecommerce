import React, { ReactComponentElement } from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'

type PageProps = {
    component: JSX.Element
    className?:string
    noHeader?:boolean
}


const Page  = ({component, className,noHeader}:PageProps) => {
    return <>
        <NavBar noHeader={noHeader}/>
        <div className={className}>
            {component}          
        </div>
    </>
}

export default styled(Page)`       
    width:100vw;    
    display:flex;
    justify-content:center; 
    
    

`
