import React, { useState } from 'react';
import { useEffect } from 'react';

function Header() {

    {/**menu function */ }
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }


    {/**scroll effect */ }
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);


    return (
        <>
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800'
                : 'bg-transparent'
                }`}>
                <div className='flex items-center justify-evenly md:justify-between p-4 max-w-7xl mx-auto'>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">Mohit Builds</h2>
                    <nav className='flex items-center justify-between'>
                        <ul className='hidden md:flex gap-8 text-gray-500 items-center'>
                            <li><a href="#home" className='font-semibold font-2xl secondary-font text-gray-300 hover:text-white p-3 rounded-sm'>Home</a></li>
                            <li><a href="#about" className='font-semibold font-2xl secondary-font text-gray-300 hover:text-white p-3 rounded-sm'>About</a></li>
                            <li><a href="#skill" className='font-semibold font-2xl secondary-font text-gray-300 hover:text-white p-3 rounded-sm'>Skills</a></li>
                            <li><a href="#projects" className='font-semibold font-2xl secondary-font text-gray-300 hover:text-white p-3 rounded-sm'>Projects</a></li>
                            <li><a href="#experience" className='font-semibold font-2xl secondary-font text-gray-300 hover:text-white p-3 rounded-sm'>Experience</a></li>
                            <li><a href="#contact" className='font-semibold font-2xl secondary-font text-gray-300 hover:text-white p-3 rounded-sm'>Contact</a></li>
                        </ul>
                    </nav>

                    <div>
                        <button onClick={toggleMenu} className='md:hidden font-bold text-sky-500 rounded-lg m-6'>☰</button>
                    </div>
                </div>
            </header>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="flex flex-col">
                    <a href="#home" onClick={toggleMenu} className='font-semibold'>Home</a>
                    <a href="#about" onClick={toggleMenu} className='font-semibold'>About</a>
                    <a href="#skill" onClick={toggleMenu} className='font-semibold'>Skills</a>
                    <a href="#project" onClick={toggleMenu} className='font-semibold'>Projects</a>
                    <a href="#experience" onClick={toggleMenu} className='font-semibold'>Experience</a>
                    <a href="#contact" onClick={toggleMenu} className='font-semibold'>Contact</a>
                </div>
            )}
        </>
    );
}

export default Header;