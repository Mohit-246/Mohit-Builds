import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className="bg-slate-900 text-slate-100 min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Skill/>
          <Project />
          <Experience />
          <Contacts/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
