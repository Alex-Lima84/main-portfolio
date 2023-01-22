import React from "react";
import Header from './components/Header'
import Home from "./pages/home";
import About from './components/About'
import Education from './components/Education'
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
    </>
  );
}

export default App;

