import { Github, Heart, Linkedin, Mail } from "lucide-react";

function Footer() {
    return (
        <>

            <section id="contact" className='scroll-mt-16 bg-slate-950'>
                <div className="grid p-4 space-x-6 md:grid-cols-3 md:space-x-6 ">
                    <div className="p-4 space-y-6">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">Mohit Builds</h2>
                        <p className="text-gray-400 font-semibold ">I am Mohit, Full Stack Developer passionate about creating exceptional digital experiences with modern technologies and clean code</p>
                        <div className="flex items-center justify-around mr-8">
                            <a href="https://github.com/Mohit-246" target="_blank" rel="noopener noreferrer" className="bg-slate-800/60 p-2 rounded-lg hover:scale-110 transform duration-200"><Github size={25} /></a>
                            <a href="https://www.linkedin.com/in/mohit-chaudhary-/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/60 p-2 rounded-lg hover:scale-110 transform duration-200"><Linkedin size={25} /></a>
                            <a href="mailto:mohitdigibus001@gmail.com?subject=Hello&body=I wanted to reach out."  className="bg-slate-800/60 p-2 rounded-lg hover:scale-110 transform duration-200"><Mail size={25} /></a>
                        </div>
                    </div>
                    <div className="p-4 space-y-6">
                        <h2 className="text-2xl font-semibold py-4">Quick Link</h2>
                        <div className="flex flex-col space-y-2">
                            <a href="#contact" className="font-semibold secondary-font text-gray-500 hover:text-gray-200">Contact</a>
                            <a href="#projects" className="font-semibold secondary-font text-gray-500 hover:text-gray-200">Project</a>
                            <a href="#skill" className="font-semibold secondary-font text-gray-500 hover:text-gray-200">Skills</a>
                            <a href="#experience" className="font-semibold secondary-font text-gray-500 hover:text-gray-200">Experience</a>
                        </div>
                    </div>
                    <div className="p-4 space-y-6">
                        <h2 className="text-2xl font-semibold py-4">Serices</h2>
                        <div className="flex flex-col space-y-2">
                            <p className="font-semibold secondary-font text-gray-500">Web Development</p>
                            <p className="font-semibold secondary-font text-gray-500">UI/UX Design</p>
                            <p className="font-semibold secondary-font text-gray-500">Consultant</p>
                            <p className="font-semibold secondary-font text-gray-500">Problem Solveing</p>
                        </div>
                    </div>
                </div>
                <hr className="mx-10 text-gray-600" />
                <div className=" flex justify-between p-6 mx-6 ">
                    <span className="flex justify-between font-semibold text-gray-600">Made with&nbsp;
                        <Heart className="text-red-400 font-semibold" size={25} /> &nbsp;by Mohit</span>
                    <span className=" font-medium text-gray-600">&copy;&nbsp;All rights Reserved 2025</span>
                </div>
            </section>
        </>
    )
}

export default Footer;