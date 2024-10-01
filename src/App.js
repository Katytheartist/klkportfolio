import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {FaEnvelope} from 'react-icons/fa';
import { About, Header, Skills, Projects, Footer, ScrollToTop } from "./Components/index.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
             {/* <a href={`${process.env.PUBLIC_URL}/KLK_Resume.pdf`} target='_blank' rel='noopener noreferrer'
                style={{ marginLeft: '10px', fontSize: '1em', textDecoration: 'underline', color: 'teal', }}>
                  RESUME
             </a> */}
             <a href={`${process.env.PUBLIC_URL}/resume.html`} target="_blank" rel="noopener noreferrer">
    RESUME
</a>

            </h2>
            <p style={{fontSize: '2rem'}}>^ GRAB A COPY ^</p>
          </div>
          </div>
          <div className="section" id="email" data-testid="emailAddress" 
            style={{ textAlign: 'center', marginTop: '50px', marginBottom: '60px' }}>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '20px', color: 'teal' }}>GET IN TOUCH</h2>
              <p style={{ fontSize: '1.75em', color: 'teal', display: 'flex', alignItems: 'center' }}>
                <FaEnvelope style={{ marginRight: '25px'}} />
                <a href="mailto:katythecoder@gmail.com" style={{ color: 'lightgray', textDecoration: 'underline', }}>
                katythecoder@gmail.com
                </a>
              </p>
          </div>
          </div>    
          <div className="section" id="footer">
            <Footer />
          </div>
           <ScrollToTop />
        </main>
      </div>
    </Router>
  );
}

export default App;
