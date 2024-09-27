import React from "react";
import "./Projects.css"

const projects = [
    {
      title: "Asylum Project",
      image: require("./pix/asylum_landpg.png"), 
      description: "Asylum is a React-based application that integrates Auth0 authentication to provide secure user login and access to a password-protected profile page."
    },
    {
      title: "KLK Portfolio",
      image: require("./pix/klk_portfoliov1.png"), 
      description: "Professional portfolio of a creative coder with a penchant for adventurous learning!",
      link: "https://github.com/Katytheartist/klkportfolio.git"
    },
    {
      title: "Article Generator",
      image: require("./pix/articlegen2.png"), 
      description: "List of articles with add/edit/delete functionality. Log in page requires an authorization token to access articles.",
      link: "https://github.com/Katytheartist/article_generator.git"
    },
    {
      title: "Grid Widget",
      image: require("./pix/gridwidget.png"), 
      description: "An application that uses React components, React hooks, and Axios to create an interactive user experience with a fun game",
      link: "https://github.com/Katytheartist/grid_widget.git"
    },
  ];
  
  function Projects() {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Source Code 
                    </a>
                </div>
            ))}

        </div>
    );
  }

  export default Projects;