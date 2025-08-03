import { useState } from 'react'
import './App.css'
import Header from './My Components/Header'
import Hero from './My Components/Hero'
import About from './My Components/About'
import Project from './My Components/Project'
import Skill from './My Components/Skill'
import Experience from './My Components/Experience'
import Contacts from './My Components/Contacts'
import Footer from './My Components/Footer'

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
