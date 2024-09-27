import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import Navbar from './Components/Navbar';
import { About, Header, Skills, Projects } from "./Components/index.js";

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

          <div>
            <h2 className="my-skills" id="skills">
            SKILLS
            </h2>
            <h3 className="my-technologies">SOME TECHNOLOGIES I HAVE WORKED WITH:</h3>
             <Skills />
          </div>

          <div className="section" id="projects">
            <h2 className="my-projects">PROJECTS</h2>
            <Projects />
          </div>
          <div className="section" id="resume" data-testid="resume">
            <h2 className="my-resume">
             <a href={`${process.env.PUBLIC_URL}/KLK_Resume.pdf`} target='_blank' rel='noopener noreferrer'
                style={{ marginLeft: '10px', fontSize: '1em', textDecoration: 'underline', color: 'blue'}}>
                  RESUME
             </a>
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
