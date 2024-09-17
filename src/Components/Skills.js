import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


function Skills(){

    const [hovered, setHovered] = useState({
        react: false,
        css: false,
        html: false,
        js: false,
    })

    const iconStyle = (isHovered) => ({
        transition: 'filter 0.3s ease, transform 0.3s ease',
        filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
        cursor: 'pointer',
        animation: 'none',
      });

      const handleMouseEnter = (icon) => {
        setHovered(prev => ({ ...prev, [icon]: true}))
      }

      const handleMouseLeave = (icon) => {
        setHovered(prev => ({ ...prev, [icon]: false}))
      }

    const containerStyle = {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
      };

    return (

        <>
        <style>{spinKeyframes}</style>
        <div className="tech-icons" style={containerStyle}>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faReact}
                className="icon"
                title="react"
                size="4x"
                color="#61DBFB"
                style={iconStyle(hovered.react)}
                onMouseEnter={() => handleMouseEnter('react')}
                onMouseLeave={() => handleMouseLeave('react')}
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faCss3}
                className="css-icon"
                size="4x"
                color="#264de4"
                style={iconStyle(hovered.css)}
                onMouseEnter={() => handleMouseEnter('css')}
                onMouseLeave={() => handleMouseLeave('css')}
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faHtml5}
                className="html-icon"
                size="4x"
                color="#e34c26"
                style={iconStyle(hovered.html)}
                onMouseEnter={() => handleMouseEnter('html')}
                onMouseLeave={() => handleMouseLeave('html')}
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faJs}
                className="js-icon"
                size="4x"
                color="#f0db4f"
                style={iconStyle(hovered.js)}
                onMouseEnter={() => handleMouseEnter('js')}
                onMouseLeave={() => handleMouseLeave('js')}
              />
            </a>
          </div>
          </>
    );
}

          export default Skills;