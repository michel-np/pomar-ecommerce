import React, { SyntheticEvent, useState } from 'react'
import SearchIcon from '../../assets/svgs/search.svg'
import {useHistory } from 'react-router-dom'
import styled from 'styled-components'


interface Props {
    className?:string
}

const SearchBar = ({className}: Props) => {

    const history = useHistory()

    const [search, setSearch] = useState<string>('')

    const handleSearch = (event:SyntheticEvent) =>{
        event.preventDefault()
        if (!search) return
        history.push(`/?search=${search}`,)
    }

    return <div className={className}>
       <form onSubmit={handleSearch}>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button>
                <img onClick={handleSearch} src={SearchIcon} alt="magnifying-glass"/>
            </button>
       </form>
    </div>
}

export default styled(SearchBar)`
    height:40px;
    background-color: rgba(200,200,200,0.3);    
    display:flex;
    
    border-radius:5px;

    form {
        display:flex;
        justify-content:space-between;
            input {
            margin-left:5px;
            background-color:rgba(0,0,0,0);
            border:none;
            color:white;
            &:focus {
                outline:none;
            }
        }
            button{
                border:0;
                background-color:rgba(0,0,0,0);
                color:white;
        }
    }

`
