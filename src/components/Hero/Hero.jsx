import React from 'react'
import Foodcards from '../FoodCards/Foodcards'
import "./Hero.css"

export default function Hero() {
    return (
        <div className='hero'>
            <div className='motto'><p>Are you ready for food?</p></div>
            <Foodcards/>
        </div>
    )
}