import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
       return(
              <>
              <div className='hero-container'>
                     <h1>Building Life-long customer relationships</h1>
                     <p>Harmonizing marketing efforts, business process, customer services, <br /> 
                     sales and operational management across all touchpoint in a single view.</p>
               <div className="hero-btns">
                     <Button className='btns' buttonStyle='btn--primary'
                     buttonSize='btn--medium'>Get Started</Button>
               </div>
              </div>
              </>
       )
};


export default HeroSection;