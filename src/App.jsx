import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App