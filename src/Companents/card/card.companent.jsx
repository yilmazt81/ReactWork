 
import React from 'react'
import './card.style.css'

export const Card = props =>(
    <div className='card-container'>
       
        <img src={'https://robohash.org/${props.monster.id}?set=set2&size=200x200'} alt='monsters'/>
        <h2>{props.monster.name}</h2>
        <h1>{props.monster.email}</h1>

    </div>

);