import React from'react';
import'./style.css';
import Card from '../../components/UI/Card';
import sidebar from '../../components/Sidebar';


const Home = Props=>{

    const gallaryHeight= 450;
    const gallarStyle = {
        height:gallaryHeight+'px'

    }
    const sideimageHeight = gallaryHeight / 3;
        
    return( 
      <div>
         <Card>
             <div className="gallarypost" style={gallarStyle}>
                 <section style={{width:'70%'}}>
                      <div className= "mainimagepost">
                          <img src={require('../../Images/food3.jpg')} alt=""/>
                      </div>
                 </section>
                 <section className={"sideimageWrapper"} style={{width:'30%'}}>
                 <div style={{height:"${sideimageHeight}px"}}>
                          <img src={require('../../Images/food5.jpg')} alt=""/>
                      </div>
                      <div>
                          <img src={require('../../Images/food1.webp')} alt=""/>
                      </div>
                      <div>
                          <img src={require('../../Images/food2.webp')} alt=""/>
                      </div>
                 </section>
             </div>
         </Card>
         
         <section>
         <div>
            
         <Card style={{marginBottom:'20px', padding: '10px'}}>
             <div>
              
             </div>
         </Card>
         <Card style={{marginBottom:'40px 0px'}}>
             <div className= 'Postimage'>
              
             </div>
         </Card>
         </div> 
         
         <sidebar/>
         </section>
         
     </div>
    );
}

export default Home;