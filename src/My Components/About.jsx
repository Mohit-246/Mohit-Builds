import React from 'react';
import {Code2, Palette, ZapIcon} from 'lucide-react';

function About() {
    return (
        <>
            <section id="about" className='scroll-mt-16 py-20 bg-slate-800'>
                <div className="items-center justify-center text-center">
                    <h1 className="text-5xl font-extrabold text-white primary-font">About Me</h1>
                    <p className="text-2xl text-gray-300 px-4 secondary-font font-semibold m-4">I'm a passionate full-stack developer creating digital solutions that make a difference.</p>
                </div>
                <div className=" flex-row md:flex p-4">
                    <div className="md:w-1/2 md:p-8 px-8">
                        <p className="text-left text-xl font-medium m-6 text-gray-400">My journey in Web development began with a curiosity about how things work behind the scenes.<br/>Today, I specialize in building scalable web applications using modern technologies like React, Node.js, and cloud platforms.</p>
                        <p className="text-left text-xl font-medium m-6 text-gray-400">I believe in writing clean, maintainable code and creating user experiences that are both functional and delightful. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.</p>

                        <div className="py-10 grid grid-cols-3 gap-4 text-center">
                            <div className="p-2 bg-slate-800 rounded-lg border border-slate-400 hover:border-amber-500/50 transition-all duration-300">
                                <div className="text-2xl font-bold text-amber-600 ">50+</div>
                                <div className="font-semibold text-gray-400">Projects</div>
                            </div>
                            <div className="p-2 bg-slate-800 rounded-lg border border-slate-400 hover:border-emerald-500/50 transition-all duration-300">
                                <div className="text-2xl font-bold text-emerald-600">2+</div>
                                <div className="font-semibold text-gray-400">Internship</div>
                            </div>
                            <div className="p-2 bg-slate-800 rounded-lg border border-slate-400 hover:border-sky-500/50 transition-all duration-300">
                                <div className="text-2xl font-bold text-sky-600">20+</div>
                                <div className="font-semibold text-gray-400">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:p-8 px-8 space-y-6 text-left'>
                        <div  className='p-6 bg-slate-800 border border-slate-400 rounded-xl hover:border-blue-500/50 transition-all duration-300'>
                                <div className='flex items-center'>
                                <Code2 className='p-2 bg-blue-500/20 rounded-lg mr-4 text-sky-500' size={50}/>
                                <h2 className=' text-sky-500 text-2xl font-bold'>Clean Code</h2>
                                </div>
                                <p className='text-slate-400 font-semibold'>Writing maintainable, scalable, and well-documented code that stands the test of time.</p>
                        </div>
                        <div  className='p-6 bg-slate-800 border border-slate-400 rounded-xl hover:border-pink-500/50 transition-all duration-300'>
                                <div className='flex items-center'>
                                <Palette className='p-2 bg-pink-500/20 rounded-lg mr-4 text-pink-500' size={50}/>
                                <h2 className=' text-pink-500 text-2xl font-bold'>Clean Code</h2>
                                </div>
                                <p className='text-slate-400 font-semibold'>Writing maintainable, scalable, and well-documented code that stands the test of time.</p>
                        </div>
                        <div  className='p-6 bg-slate-800 border border-slate-400 rounded-xl hover:border-amber-500/50 transition-all duration-300'>
                                <div className='flex items-center'>
                                <ZapIcon className='p-2 bg-amber-500/20 rounded-lg mr-4 text-amber-500' size={50}/>
                                <h2 className=' text-amber-500 text-2xl font-bold'>Clean Code</h2>
                                </div>
                                <p className='text-slate-400 font-semibold'>Optimizing applications for speed, efficiency, and seamless performance across all devices.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About;