import React from "react";
import '../styles/FruitFinder.css'

const fruit = {
    name: 'Fruit Finder',
    imageUrl: '../images/FruitFinder.png',
    imageWidth: 500,
    imageHeight: 400,
    
  };

  function FruitFinder() {
    return (
      <>
      <h1 className="h1">Fruit Finder</h1>
    
    
      <img 
      className="fruit h1"
      src={require('../images/FruitFinder.png')}
      alt={'photo of fruit finder ui' + fruit.name}
      style={{
        width: fruit.imageWidth,
        height: fruit.imageHeight
      }}
      />
      <p>Fruit Finder is a fun social app created in the interest of finding and sharing rare, ripe, and plentiful fruit finds. I worked in a group to use api's, Express.js, Node.js, Handlebars and Sequelize. <br></br> <a href="https://fruit-finder-f298ed9223ea.herokuapp.com/">Deployed App</a><br></br> <a href="https://github.com/ThePebble01/fruit-finder">Github Repo</a> </p>
      </>
    );
  }
  export default FruitFinder;