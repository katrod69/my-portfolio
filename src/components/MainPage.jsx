import React from "react";
import '../styles/MainPage.css'


function MainPage() {
    return (
      <div>
        <p >
          <h1 class='font'>Welcome to the Portal-folio of this developer</h1>
          <img
          src={require('../images/Welcome.jpeg')}  
          alt="Welcome"
          
        />
           
          </p>
          </div>
    );
    }

export default MainPage;