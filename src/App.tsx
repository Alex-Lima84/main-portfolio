import React from "react";
import Header from './components/Header'
import Home from "./pages/home";
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skill from './components/Skill'
import Project from './components/Project'
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skill />
      <Project />
    </>
  );
}

export default App;

