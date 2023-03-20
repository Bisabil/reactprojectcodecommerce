import React from 'react'
import Activity from './component/Activity'
import Booking from './component/Booking'
import Contact from './component/Contact'
import Gallery from './component/Gallery'
import Hero from './component/Hero'
import NavBar from './component/NavBar'
import Topbar from './component/Topbar'

function App() {
  

  return (
    <div className="App">
      <Topbar />
      <NavBar />
      <Hero />
      <Activity />
      <Booking />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
