import React from 'react'
import Foodcards from '../FoodCards/Foodcards'
import "./Hero.css"

export default function Hero(
    {
        recipes
    }
) {
    return (
        <div className='hero'>
            <div className='motto'><p>Are you ready for food?</p></div>
            <Foodcards recipes={recipes}/>
        </div>
    )
}