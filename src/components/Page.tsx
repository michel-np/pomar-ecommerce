import React, { ReactComponentElement } from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'

type PageProps = {
    component: React.FC
    className?:string
    noHeader?:boolean
}


const Page  = ({component: Component, className,noHeader}:PageProps) => {
    return <>
        <NavBar noHeader={noHeader}/>
        <div className={className}>
            <Component />
        </div>
    </>
}

export default styled(Page)`       
    width:100vw;    
    display:flex;
    justify-content:center; 
    
    

`
