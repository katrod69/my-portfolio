import React from 'react';
import '../styles/Navbar.css';


const styles = {
  navbarStyle: {
   
    gap: 10,
  },
  
};


function Navbar({page, handleChange}) {
  return (
    <nav style={styles.navbarStyle} className="navbar app-container">
      <a href="#main"  onClick={() => handleChange('MainPage')} >Main</a>
      <a href="#AboutMe"  onClick={() => handleChange('AboutMe')}>About Me</a>
      <a href="#FruitFinder"  onClick={() => handleChange('FruitFinder')} >Fruit Finder</a>
      <a href="#DrDrink"  onClick={() => handleChange('DrDrink')} >Dr.Drink</a>
      <a href="#CodeGauntlet"  onClick={() => handleChange('CodeGauntlet')} >Code Gauntlet</a>
      <a href="#Contact"  onClick={() => handleChange('Contact')} >Contact</a>
      <a href="#ResumeViewer"  onClick={() => handleChange('ResumeViewer')} >Resume</a>
    </nav>
  );
}

export default Navbar;