import React from 'react'
import CardItem from './CardItem/CardItem'
import './cards.css'
//import '../Firebase/Firebase'

function Cards() {
 
  return (
    <div className='cards'>
    <h1>Check out these Cards!</h1>
    <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                  src="images/img-2.jpg"
                  text="Vacation Time"
                  label='Nothing Much'
                  path='/portfolio'
                />
                <CardItem 
                  src="images/img-2.jpg"
                  text="Geography"
                  label='Nairobi Kenya'
                  path='/'
                />
                <CardItem 
                  src="images/health.jpg"
                  text="Live Healthy"
                  label='Eat Healthy Think Healthy'
                  path='/'
                />
            </ul>
            <ul className="cards__items">
                
            </ul>
            <ul className="cards__items">
                <CardItem 
                  src="images/vehicle.jpg"
                  text="Dream Vehicle"
                  label='BMW X6'
                  path='/portfolio'
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                  src="images/home.jpg"
                  text="Working For A Future?"
                  label='Yes! In Tech'
                  path='/portfolio'
                />
            </ul>
        </div>
    </div>

    </div>
  )
}

export default Cards