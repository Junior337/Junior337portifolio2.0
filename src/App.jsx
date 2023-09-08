import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/projects'
import Contact from './components/Contact'
import About from './components/About'

function App() {


  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Work />
      <Projects />

      <Contact />
    </div>
  )
}

export default App
