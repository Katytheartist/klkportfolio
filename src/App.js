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
          <div className="section" id="resume" data-testid="resume"
          style={{
            position: 'relative',
            width: '100%',
            height: '300px',
            marginBottom: '20px',
          }}
          >
          <div
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bkcomp.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            width: '100%',
            height: '100%',
            position: 'absolute',
            marginBottom: '20px',
            top: 0,
            bottom: 0,
            zIndex: 0,
          }}
          />
            <div 
          style={{
            position: 'relative',
            zIndex: 1,  
            display: 'flex',
            flexDirection: 'column',  
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
  >
            <h2 className="my-resume"
            style={{
             fontSize: '2.5em',
             marginBottom: '10px',
            }}>
             <a href={`${process.env.PUBLIC_URL}/KLK_Resume.pdf`} target='_blank' rel='noopener noreferrer'
                style={{ marginLeft: '10px', fontSize: '1em', textDecoration: 'underline', color: 'teal', }}>
                  RESUME
             </a>
            </h2>
            <p style={{fontSize: '2rem'}}>^ GRAB A COPY ^</p>
          </div>
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
