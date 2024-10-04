import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs,
  
} from "@fortawesome/free-brands-svg-icons";

import { SiNodedotjs, SiExpress, SiRedux, SiTypescript, SiTailwindcss, SiJest, SiVercel } from "react-icons/si";

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
        node: false,
        express: false,
        redux: false,
        typescript: false,
        tailwindcss: false,
        jest: false,
        vercel: false,
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
        margin: '60px 10px 50px 10px',
        flexDirection: 'column',
      };

      const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px',
        marginRight: '10px',
        marginLeft: '10px',
        padding: '10px',
      };

    return (

        <>
        <style>{spinKeyframes}</style>
        <div className="tech-icons" style={containerStyle}>
          <div style={rowStyle}>
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
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <SiNodedotjs
            size="4rem"
            color="#68A063"
            style={iconStyle(hovered.node)}
            onMouseEnter={() => handleMouseEnter('node')}
            onMouseLeave={() => handleMouseLeave('node')}
          />
        </a>
        </div>

        <div style={rowStyle}>
        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
          <SiExpress
            size="4rem"
            color="#000000"
            style={iconStyle(hovered.express)}
            onMouseEnter={() => handleMouseEnter('express')}
            onMouseLeave={() => handleMouseLeave('express')}
          />
        </a>
        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
          <SiRedux
            size="4rem"
            color="#764abc"
            style={iconStyle(hovered.redux)}
            onMouseEnter={() => handleMouseEnter('redux')}
            onMouseLeave={() => handleMouseLeave('redux')}
          />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <SiTypescript
            size="4rem"
            color="#3178c6"
            style={iconStyle(hovered.typescript)}
            onMouseEnter={() => handleMouseEnter('typescript')}
            onMouseLeave={() => handleMouseLeave('typescript')}
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <SiTailwindcss
            size="4rem"
            color="#38B2AC"
            style={iconStyle(hovered.tailwindcss)}
            onMouseEnter={() => handleMouseEnter('tailwindcss')}
            onMouseLeave={() => handleMouseLeave('tailwindcss')}
          />
        </a>
        <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
          <SiJest
            size="4rem"
            color="#C21325"
            style={iconStyle(hovered.jest)}
            onMouseEnter={() => handleMouseEnter('jest')}
            onMouseLeave={() => handleMouseLeave('jest')}
          />
        </a>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          <SiVercel
            size="4rem"
            color="#000000"
            style={iconStyle(hovered.vercel)}
            onMouseEnter={() => handleMouseEnter('vercel')}
            onMouseLeave={() => handleMouseLeave('vercel')}
          />
        </a>
        </div>
          </div>
          </>
    );
}

          export default Skills;