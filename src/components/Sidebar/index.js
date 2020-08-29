import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function sidebar
**/
 

const sidebar = (props) => {
  return(
    <div className='sidebarcontainer'>
        <Card style={{marginBotton:'20px', padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                <span>About us</span>
               
            </div>
            <div className="aboutusimagecontainer">
                    <img src="https://www.globalbollywood.com/wp-content/uploads/2020/06/dwwd.jpeg" alt ="aboutimage"/>
                </div>
                
                <div className="aboutusbody">
                    <p>
                    The FoodXp is online food delivery app ,order food  from  restaurants near, to make it simple for the customer in reaching the food on time to the customer, from nearest restaurants, hotels, cafes, bakeries etc.
                    </p>

                </div>

        </Card>

        <Card>
            <div className="cardHeader">
                <span>Contact us</span>
               
            </div>
        </Card>
    </div>
   )

 }

export default sidebar