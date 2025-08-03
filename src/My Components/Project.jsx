import React from "react";
import Blog from "../assets/Blog.jpg";
import ProjectCard from "../My Elements/ProjectCard";
import { Github } from "lucide-react";


function Project() {
    return (
        <>
            <section id="projects" className="scroll-mt-16 py-20">
                <div className="items-center justify-center text-center">
                    <h1 className="text-5xl font-extrabold text-white primary-font">Projects</h1>
                    <p className="text-2xl text-gray-300 px-4 secondary-font font-semibold m-4">A Showcase of My Work and the things I am Passinate about.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectCard
                        img='https://images.pexels.com/photos/16023919/pexels-photo-16023919.jpeg'
                        title='Portfolio Website'
                        description='A portfolio website to showcase my projects and skills.This is my personal portfolio website built using React, Vite, and Tailwind CSS. It showcases my skills, projects, and experience in web development. The site is fully responsive and designed with a modern UI/UX approach.'
                        gitLink=''
                        liveLink=''
                        techStack={['React', 'Vite', 'Tailwind CSS', 'Node Js', 'Express js']}
                    />
                    <ProjectCard
                        img='https://images.pexels.com/photos/13035751/pexels-photo-13035751.jpeg'
                        title='News App'
                        description='The News App is a responsive web application built using React. It fetches and displays the latest news articles using the NewsData.io API, allowing users to stay updated with trending headlines. The project demonstrates dynamic content loading, API integration, and clean UI/UX design.'
                        gitLink='https://github.com/Mohit-246/News-App'
                        liveLink='https://news-app-eight-fawn.vercel.app/'
                        techStack={['React', 'Vite', 'CSS', 'Node Js', 'Express js']}
                    />
                </div>
                <div className="justify-center text-center items-center">
                    <a href="https://github.com/Mohit-246" target="_blank"  className="inline-flex text-xl items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"><Github className="mr-4" size={24} />View All Project</a>
                </div>
            </section>
        </>
    );
}

export default Project;