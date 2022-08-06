import React from 'react'
import CardItem from './CardItem/CardItem'
import './cards.css'
//import '../Firebase/Firebase'

function Cards() {
 
  return (
    <div className='cards'>
    <h1>Check out these Posts!</h1>
    <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                  src="images/img-2.jpg"
                  text="Placeholder"
                  label='Label'
                  path='/services'
                />
                <CardItem 
                  src="images/img-2.jpg"
                  text="Placeholder"
                  label='label'
                  path='/services'
                />
                <CardItem 
                  src="images/health.jpg"
                  text="Placeholder"
                  label='Label'
                  path='/services'
                />
            </ul>
            <ul className="cards__items">
                
            </ul>
            <ul className="cards__items">
                <CardItem 
                  src="images/vehicle.jpg"
                  text="Placeholder"
                  label='Label'
                  path='/services'
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                  src="images/home.jpg"
                  text="Placeholder"
                  label='Label'
                  path='/services'
                />
            </ul>
        </div>
    </div>

    </div>
  )
}

export default Cards