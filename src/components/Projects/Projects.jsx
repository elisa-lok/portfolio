import { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Pizza Ordering Platform",
      description:
        "A scalable e-commerce platform with advanced search, user authentication, and payment integration.",
      techStack: ["NextJS", "NodeJS", "MongoDB"],
      codeLink: "https://github.com/elisa-lok/foodie-NextJS",
      liveLink: "https://foodie-next-o6g8atm4h-elisa-loks-projects.vercel.app/",
      icon: "fas fa-pizza-slice",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my skills, experience, and projects.",
      techStack: ["ReactJS", "Bootstrap"],
      codeLink: "https://github.com/elisa-lok/portfolio",
      liveLink: "https://portfolio-one-beryl-78.vercel.app/",
      icon: "fas fa-briefcase",
    },
    {
      id: 3,
      title: "Micro-event Management Platform",
      description:
        "This project is a micro-event management platform built using ReactJS and Next.js. It allows users to create, edit, delete, and view events.User authentication(signup and login) is implemented for access control.",
      techStack: ["ReactJs", "NextJs"],
      codeLink: "https://github.com/elisa-lok/micro-event",
      liveLink: "",
      icon: "fas fa-calendar-alt",
    },
    {
      id: 4,
      title: "Laravel-todo-list System",
      description:
        "A simple TODO list demo built with Laravel Livewire. The main purpose of this project is to provide an example demo for those who are starting with Laravel Livewire.",
      techStack: ["Laravel", "Livewire", "Bootstrap"],
      codeLink: "https://github.com/elisa-lok/Laravel-todo-list",
      liveLink: "",
      icon: "fas fa-check-circle",
    },
    {
      id: 5,
      title: "E-blog System",
      description:
        "This project was developed with Rails on Ruby to build a simple blog, implement user registration and login, logout, control permissions for operations.",
      techStack: [
        "Rails on Ruby",
        "ActionText",
        "sqlite3",
        "Tailwind CSS",
        "Hotwired/turbo-rails",
        "Hotwired/stimulus",
      ],
      codeLink: "https://github.com/elisa-lok/eblog",
      liveLink: "",
      icon: "fas fa-pen-fancy",
    },
    {
      id: 6,
      title: "Food Order Project",
      description:
        "This project was built with ReactJS. Users can browse a menu of items, add them to their cart, and proceed to checkout.",
      techStack: ["ReactJS", "Vite"],
      codeLink: "https://github.com/elisa-lok/food-order-project",
      liveLink: "",
      icon: "fas fa-utensils",
    },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="projects-title text-center mb-5">My Projects 🚀</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
              <div
                className="card project-card shadow-sm h-100"
                onClick={() => openProjectModal(project)}
              >
                <div className="card-body">
                  <div className="project-title-container">
                    <div className="project-icon">
                      <i className={project.icon}></i>
                    </div>
                    <h5 className="card-title">{project.title}</h5>
                  </div>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <h5>Tech Stack</h5>
            <ul>
              {selectedProject.techStack.map((tech, index) => (
                <li key={index}>- {tech}</li>
              ))}
            </ul>
            <div className="modal-links">
              <a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Code
              </a>
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
