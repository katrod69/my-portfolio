import React from "react";

const gauntlet = {
    name: 'CodeGauntlet',
    imageUrl: '../images/DrDrink.png',
    imageWidth: 500,
    imageHeight: 400,
   
  };

 function DrDrink() {
    return (
      <>
      <h1 className="h1">The Code Gauntlet</h1>

      
      <img 
      className="gauntlet"
      src={require('../images/CodeGauntlet.png')}
      alt={'photo of Code Gauntlet ui' + gauntlet.name}
      style={{
        width: gauntlet.imageWidth,
        height: gauntlet.imageHeight,
      }}
      />
      <p>Code Gauntlet is an app meant to be used to not only build coding skill but to also challenge friends to coding challenges. Future implementation would include an ability to hedge bets on coding solutions submitted by users and an ability to find and add friends. <a href="https://code-gauntlet-3e9a71d036dd.herokuapp.com/">Deployed App</a><br></br> <a href="https://github.com/ryantixier/Code-Gauntlet">Github Repo</a> </p>
      </>
    );
  }

  export default DrDrink;