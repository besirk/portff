import React from 'react';


import {Footer,Header} from './containers';
import {Brand, Navbar,Projects} from './components';
import './App.css';


const App = () => {
  return (
    <div className='App gradient__bg'>
     
        <div>
            <Navbar />
            <Header />
        </div>
        <Brand  />
        <Projects />
        <Footer />
    </div>
  )
}

export default App