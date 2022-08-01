import React from 'react';


import {Footer,Header} from './containers';
import {Brand, Nav, Navbar,Projects, Technologies} from './components';
import './App.css';


const App = () => {
  return (
    <div className='App gradient__bg'>
     
           
            {/* <Navbar /> */}
            <Nav />
            <Header />
            
        <Brand  />
        <Technologies />
        <Projects />
        <Footer />
    </div>
  )
}

export default App