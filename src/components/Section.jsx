import React from 'react';
import '../styles/Section.css';
import { FruitFinder } from './FruitFinder';
import DrDrink from './Dr.Drink';

const styles = {
  sectionStyles: {
    background: 'transparent',
  },
};

function Section() {
    return (
      <section
       style={styles.sectionStyles} 
       className="section fruit" >
        <FruitFinder imageUrl={'../images/FruitFinder.png'} ></FruitFinder>
        <div> <DrDrink imageUrl={'../images/DrDrink.png'}></DrDrink> </div>
      </section>
      
    );
  }
  
  

export default Section;