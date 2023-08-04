import React from "react";
import { useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBtn from "./components/NavBtn";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import FruitFinder from './components/FruitFinder';
import DrDrink from './components/DrDrink';
import CodeGauntlet from './components/CodeGauntlet';
import MainPage from "./components/MainPage";
import  Contact from "./components/Contact";
import ResumeViewer from "./components/ResumeViewer";
import './App.css';

function TabSwitcher({tab, selectTab}) {
  return (
    
    <>
    <Navbar>
    <NavBtn
        isActive={tab === 'MainPage'}
        onClick={() => selectTab('MainPage')}
      >
        MainPage
      </NavBtn>
      <NavBtn
        isActive={tab === 'AboutMe'}
        onClick={() => selectTab('AboutMe')}
      >
        About
      </NavBtn>

      <NavBtn
        isActive={tab === ''}
        onClick={() => selectTab('FruitFinder')}
      >
        FruitFinder
      </NavBtn>
      <NavBtn
        isActive={tab === ''}
        onClick={() => selectTab('DrDrink')}
      >
        Dr.Drink
      </NavBtn>
      <NavBtn
        isActive={tab === ''}
        onClick={() => selectTab('CodeGauntlet')}
      >
        CodeGauntlet
      </NavBtn>

      <NavBtn
        isActive={tab === 'Contact'}
        onClick={() => selectTab('Contact')}
      >
        Contact
      </NavBtn>
      <NavBtn
        isActive={tab === 'ResumeViewer'}
        onClick={() => selectTab('ResumeViewer')}
      >
        Resume
      </NavBtn>
      </Navbar>
      <hr />
    </>
  );
}

export default function App(){
  const [tab, setTab] = useState('MainPage');
  const selectTab=(nextTab) => setTab(nextTab);   
  
  console.log(tab);
  const switchPage=()=>{
if (tab === 'MainPage'){
  return (
  <MainPage />
  )
}
if (tab === 'AboutMe'){
  return (
  <AboutMe />
  )
}
if (tab === 'FruitFinder'){
  return (
  <FruitFinder />
  )
}
if (tab === 'DrDrink'){
  return (
  <DrDrink />
  )
}
if (tab === 'CodeGauntlet'){
  return (
  <CodeGauntlet />
  )
}
if (tab === 'Contact'){
  return (
  <Contact />
  )
}
if (tab === 'ResumeViewer'){
  return (
  <ResumeViewer />
  )
}
  }

  return (
 <>  <div>
{/* <div> <Background /> </div> */}
      <Header />  
<Navbar page = {tab} handleChange= {selectTab} />

      {
        switchPage()
      }

<div> 
  <footer>
  <Footer /> 
  </footer>
</div>
 </div>


 </>
  )
};




