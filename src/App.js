import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import Logo from './components/logo';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './containers/About us';
import Franchise from './containers/Franchise';
import News from './containers/News';
import ContactUs from './containers/ContactUs';



function App() {
  return (
    <Router>
    <div className="App">      
      <Header/>
      <Hero/>
      
    
    <Route path="/"exact component={Home}/>
    <Route path="/AboutUs" component={AboutUs}/>
    <Route path="/Franchise" component={Franchise}/>
    <Route path="/News" component={News}/>
    <Route path="/ContactUs" component={ContactUs}/> 
    

    </div>
    
    </Router>
  
    
  ); 
}

export default App;
