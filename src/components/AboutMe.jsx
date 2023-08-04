import React from "react";
import '../styles/AboutMe.css';
import Navbar from "./Navbar";

function AboutMe() {
    return(
          
      
         <> 
       
        <img
          src={require('../images/Me.jpeg')}  
          alt="my profile"
          className="container photo title"
        />
        <div><span className="paragraph">
      
      My name is Katherine Rodriquez and I'm a fullstack web developer based out of Denver, CO. I love coding, climbing, camping, Costco churros, cycling, my family and friends. I was born in 1992 and one of my favorite early memories was being taught how to turn my grandparents brand new computer tower on and seeing the "Windows '95" icon stream across
their monitor all before I had even attended pre-K. Computers and the internet played a large role in how I grew up. I have always had an interest in games, coding and computing since I got to take an introductory class my sophomore year of highschool. I started coding because I am an eternal student and I can't help but feel that the world will continue to become more digitized </span>
</div> 
      </> 
    )
}

export default AboutMe;