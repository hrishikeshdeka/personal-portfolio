import React from 'react';
import Project from './Project';
import washwheels from '../assets/WashWheels.png';
import skull from '../assets/SkullBlocker.png';
const projects = [
    {
        id: 1,
        name: 'Wash Wheels 🛞',
        tools: ['React,Spring Boot, Bootstrap , MongoDB, MySQL, Microservices, RazorPay API'],
        description: 'This is a full-stack application with the purpose of booking washpacks provided by the website.',
        img: washwheels,
        // demo: 'https://image-gallery-react-tailwindcss.onrender.com',
        // github: 'https://github.com/hrishikeshdeka/OnDemand-CarWash'
    },
     {
        id: 2,
        name: 'Skull Blocker',
        tools: ['JavaScript, Json , Chrome'],
        description: 'This is a custom ad-blocker extension for chrome .',
        img: skull,
        // demo: 'https://expense-tracker-mern-41ga.onrender.com/',
        // github: 'https://github.com/cnourrcier/expense-tracker-mern'
     }
]

const Projects = () => {
    return (
        <section id="projects" className="project">
            <div className="container">
                <div className="project-content">
                    <p>Projects</p>
                    <h3>Here you will find some of the personal and clients projects that I
                        created with each project containing its own case study</h3>
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;
