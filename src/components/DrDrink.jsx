import React from "react";
import '../styles/DrDrinks.css'

const drink = {
    name: 'Dr.Drink',
    imageUrl: '../images/DrDrink.png',
    imageWidth: 500,
    imageHeight: 400,
   
  };

 function DrDrink() {
    return (
      <>
      <h1 className="h1">Dr.Drink</h1>

      
      <img 
      className="drink"
      src={require('../images/DrDrink.png')}
      alt={'photo of Dr.Drink ui' + drink.name}
      style={{
        width: drink.imageWidth,
        height: drink.imageHeight,
      }}
      />
      <p>Dr.Drink is a beverage recipe app with an aspiration towards becoming more social and user input friendly. This was my first opportunity to work in a group to create a fully functioning app using skills in CSS and Bootstrap.<a href="https://ryantixier.github.io/Dr-Drink/">Deployed App</a><br></br> <a href="https://github.com/ryantixier/Dr-Drink">Github Repo</a> </p>
      </>
    );
  }

  export default DrDrink;