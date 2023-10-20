import React from "react";
import "./App.css";
import AboutMePage from "./Pages/AboutMePage";
import TechStackPage from "./Pages/TechStackPage";
import Navbar from "./Components/Navbar";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
export default function App() {
  return (
    <div>
      <Navbar/>
      <AboutMePage/>
      <TechStackPage/>
      <div className="education"> 
        <h1>Projects</h1>
        <Projects/>
        
        <h1>Education</h1>
        <Education/>
      </div>
    </div>
  );
}