import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import Navbar from './Components/Navbar';
import { About, Header } from "./Components/index.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <header className="App-header" data-testid="navbar">
          <Navbar />
        </header> */}
        <main>
          <div className="section" id="about" data-testid="about">
            <About />
          </div>
          <div className="section" id="projects">
            <h2 className="my-projects">
              My Projects
            </h2>
            <div className="section" data-testid="carousel">

            </div>
          </div>
          <div className="section" id="recommendations" data-testid="recommendations">
            <h2 className="recommendations">
              Recommendations
            </h2>
            
          </div>
          <div className="section" id="contact" data-testid="contactForm">
            Contact form here      
          </div>
          Scroll btn?
          Footter goes here 
        </main>
      </div>
    </Router>
  );
}

export default App;
