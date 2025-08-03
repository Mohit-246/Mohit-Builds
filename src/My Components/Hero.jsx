import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
    return (
        <>
            <div>
                <section id="home" className=' bg-slate-800 scroll-mt-16 py-48 relative overflow-hidden'>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                    <div className=' relative items-center text-center justify-center '>
                        <div className='animate-fadeIn'>
                            <h2 className='text-6xl font-extrabold primary-font m-4 bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent'>
                                Hello, I am Mohit<span className='block secondary-font text-sky-500 text-3xl m-2
                            ' >Web Developer and Designer</span></h2>
                            <div className='text-xl font-semibold text-gray-400 px-8'>
                                <p>Crafting exceptional digital experiences with modern technologies.</p>
                                <p> Passionate about clean code, user experience, and innovative solutions.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 m-8'>
                            <a href="https://www.linkedin.com/in/mohit-chaudhary-/" target='_blank' className='p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25' ><Linkedin size={24} /></a>
                            <a href="https://github.com/Mohit-246" target='_blank' className='p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25'>
                                <Github size={24} /></a>
                            <a href="mailto:chaudharymohit2408@gmail.com?subject=Hello&body=I wanted to reach out." className='p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25'><Mail size={24} /></a>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center secondary-font">
                            <a href="#project" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">View Project</a>
                            <a href="#contact" className='px-8 py-4 border border-slate-600 rounded-full text-slate-300 font-semibold hover:text-white hover:border-slate-500 hover:scale-105 transition-all duration-300 '>Contact Me</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Hero;