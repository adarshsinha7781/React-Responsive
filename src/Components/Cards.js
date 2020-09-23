import React from 'react'
import CardItem from './CardsItem'
import './Cards.css';

function Cards() {
    return (
        <div className= "cards">
            <h1>Check out these epic destinations</h1>
            <div className= ".cards__container">
                <div className = "cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src= 'images/img-9.jpg'
                        text="explore the hidden waterfall "
                        label="Adventure"
                        path = '/services'
                        />
                        <CardItem 
                        src= 'images/img-2.jpg'
                        text="Travel through the Islands "
                        label="Luxury"
                        path = '/services'
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src= 'images/img-3.jpg'
                        text="Set sail in the atlantic "
                        label="Mystery"
                        path = '/services'
                        />
                        <CardItem 
                        src= 'images/img-4.jpg'
                        text="Experience football on top "
                        label="Adventure"
                        path = '/products'
                        />
                        <CardItem 
                        src= 'images/img-8.jpg'
                        text="Ride through the sahara desert "
                        label="Adrenaline"
                        path = '/sign-up'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
