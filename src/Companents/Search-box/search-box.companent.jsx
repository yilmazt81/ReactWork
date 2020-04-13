import React from 'react';
import './search-box.style.css';


export const SearchBox = ({placeholder,handlechange})=>{
    return (<input placeholder={placeholder} className='search' type='search' onChange={handlechange}></input>)
}