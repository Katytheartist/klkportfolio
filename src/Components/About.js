import React from 'react';
import './About.css'; 
import klk1 from './pix/klk1.png';
import Skills from './Skills';


function About() {
    const underlineStyle = {
        color: 'gray',
        position: 'relative',
      };

      const underlineBorderStyle = {
        borderBottom: '2px solid pink',
        content: "",
        position: "absolute",
        bottom: "-2px",
        left: "0",
        width: "100%",
        height: "2px",
        backgroundColor: "var(--primary-color)",
      };      

  return (
    <div className="section" id="about" data-testid="about">
        <div className='about-container'>
        <div className='image-container'>
        <img src={klk1} 
        alt="Katy Kane" 
        className="klk-photo" 
        />
        </div>
        <div className='about-text-container'>
        <h2 className="my-name">KATY L. KANE</h2>
          <h3
            className="career-title text-lg md:text-xl"
            style={underlineStyle}
          >
            FULL STACK DEVELOPER
            <span style={underlineBorderStyle}></span>
          </h3>

          
        

      <h3>ABOUT ME</h3>
      <div className="about-text">
      
        <p>
          I am a passionate Full Stack Web Developer with experience in both front-end and back-end technologies.
          I love creating interactive and user-friendly applications that solve real-world problems. 

          My background in Anthropology and Art adds a unique perspective to my technical work, 
          and I enjoy combining creativity with coding to bring ideas to life. 
          
        <p>
          My journey into computer programming began out of a love for problem-solving, design and technology. I found 
          coding to be not only intellectually stimulating but also an incredibly satisfying way to channel my artistic skills into something technical. The word technical is derived from the greek word 'tekhno', which means 'art or skill'. Anything technical requires both art and skill. 
          Web development allows me to create interactive experiences and solutions that can reach a wide audience, and it provides me with the opportunity to support my family while working remotely, something that is important to me. My passion for coding is only enhanced by my lifelong passion for art, which remains a core part of my identity. I thrive on creating art 
          that challenges perceptions and inspires thought on issues like global warming, human rights, and equality. 
          </p>


          As a Full Stack Developer, I have honed my skills in React.js, Redux, Node.js, and PostgreSQL. I am proficient in Javascript, Html, Css and Python and I prefer backend work that allows me to develop new skills. I have built and enhanced several 
          projects that showcase my ability to integrate complex features, keep reading to see examples of my work.
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default About;


