import React from 'react';
import './style.css';
import Card from '../../components/UI/Card'

/**
* @author
* @function AboutUs
**/

const AboutUs = (props) => {
  return(
    <div>
      <Card>
        <div>
          <section className="aboutusimage">
            <div>
              <img src={require('../../Images/foodxp2.jpeg')} alt=""/>
            </div>
          </section>
        </div>
      </Card>
    
    </div>
   )

 }

export default AboutUs