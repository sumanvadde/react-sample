import React from 'react';
import './style.css';
import NewsPost from '../../components/Newspost';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
 
/**
* @author
* @function News
**/

const News = (props) => {
  return(
  <section className= 'Container'>
      <NewsPost/>
      <Sidebar/>
      

  </section>

   )

 }

export default News;