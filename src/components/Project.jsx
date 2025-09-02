import React from "react";
import ProjectCard from "../elements/ProjectCard";
import { Github } from "lucide-react";


function Project() {
    return (
        <>
            <section id="projects" className="scroll-mt-16 min-h-screen py-20">
                <div className="items-center justify-center text-center">
                    <h1 className="text-5xl font-extrabold text-white primary-font">Projects</h1>
                    <p className="text-2xl text-gray-300 px-4 secondary-font font-semibold m-4">A Showcase of My Work and the things I am Passinate about.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                   
                    <ProjectCard
                        img='https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg'
                        title='Portfolio Website'
                        description='A portfolio website to showcase my projects and skills.This is my personal portfolio website built using React, Vite, and Tailwind CSS. It showcases my skills, projects, and experience in web development. The site is fully responsive and designed with a modern UI/UX approach.'
                        gitLink=''
                        liveLink=''
                        techStack={['React', 'Vite', 'Tailwind CSS', 'Express js','MongoDB']}
                    />
                    <ProjectCard
                        img='https://images.pexels.com/photos/13035751/pexels-photo-13035751.jpeg'
                        title='News App'
                        description='The News App is a responsive web application built using React. It fetches and displays the latest news articles using the NewsData.io API, allowing users to stay updated with trending headlines. The project demonstrates dynamic content loading, API integration, and clean UI/UX design.'
                        gitLink='https://github.com/Mohit-246/News-App'
                        liveLink='https://news-app-eight-fawn.vercel.app/'
                        techStack={['React', 'Vite', 'CSS','API > Newsdata-io']}
                    />
                    <ProjectCard
                        img='https://images.pexels.com/photos/5632396/pexels-photo-5632396.jpeg'
                        title='E-Com Platform (On Going)'
                        description='An e-commerce website project allows users to browse, select, and purchase products online. It includes features like product catalogs, shopping carts, secure checkout, and order tracking. Users can create accounts, manage orders, and view purchase history. The platform also provides admin controls for managing products, users, and sales.'
                        gitLink=''
                        liveLink=''
                        techStack={['React', 'Vite', 'Tailwindcss',]}
                    />
                     <ProjectCard
                        img='https://images.pexels.com/photos/8062358/pexels-photo-8062358.jpeg'
                        title='TaskFlow - Your Personal Productivity Champion'
                        description='Stay organized, focused, and in control with TaskFlow, the ultimate task management app designed to simplify your life. Whether you’re managing daily to-dos, planning projects, or tracking long-term goals, TaskFlow gives you a clean and intuitive space to get things done.'
                        gitLink='https://github.com/Mohit-246/TaskFlow'
                        liveLink=''
                        techStack={['React', 'Vite', 'Tailwindcss','Local Storage']}
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
