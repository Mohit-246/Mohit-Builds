import React from 'react';
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ img, title, description, techStack, liveLink, gitLink }) {
    return (
        <>
            <div className="w-full  p-8">
                <div className="group  bg-slate-700/30 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                    <div className="relative overflow-hidden ">
                        <img src={img} alt={title} className="w-full h-auto md:h-48 object-cover group-hover:scale-110 transition-all duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                            <div className="flex space-x-4">
                                <a href={liveLink} target='_blank' className="p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"><ExternalLink size={30} /></a>
                                <a href={gitLink} target='_blank' className="p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"><Github size={30} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-3xl primary-font font-bold text-white mb-4">{title}</h2>
                        <p className="text-gray-300 overflow-hidden secondary-font font-semibold my-8">{description}                                </p>
                        <div className="flex flex-wrap space-x-2 secondary-font">
                            {techStack.map((tech, index) => (
                                <span key={index} className="text-sky-300 bg-sky-400/50 border border-sky-800 font-semibold px-4 py-2 rounded-full m-2">{tech}</span>
                            ))}

                    </div>
                </div>
            </div>
        </div >

        </>
    );
}

export default ProjectCard;