import React from 'react'
import Activity from './component/Activity'
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
    </div>
  )
}

export default App
