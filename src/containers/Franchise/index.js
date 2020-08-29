import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';



/**
* @author
* @function Franchise
**/

const Franchise = (props) => {
  return(
    <div className="Newspostcontainer">
       <Card>
           <div className="NewspostHeader">
           <span>Featured</span>
           <h1 className="Posttitle">Become our passionate franchisor</h1>
          
           </div>
           <div className="postimagecontainer">
               <img src={require('../../Images/foodxp3.jpeg')} alt="postimage"/>

               <div className="postcontent">
                   <h3>
                       Foodxp-Franchising
                   </h3>
                   
                   <p className="postcontent">
                    

Hope you are doing well, if you are passionate about doing business, then this is the right time to talk about our company.

 We are food delivery services, we provide Online food delivery services to the customers, where customers can order from  favourite food from restaurant nearby.not food ,but also groceries, vegetables and fruits.
 
we have started in the year 2017 with 40+ restaurants in 2 places, we wanted to give opportunity for young entrepreneurs who are passionate about doing business. 
                
                </p>
            
               </div>

           </div>
          
       </Card>
       
       
        </div>
   )

 }

export default Franchise;