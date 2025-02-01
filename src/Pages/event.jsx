import React from 'react'
import Events from '../Components/Events'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
// import Header from '../Components/header'
function event() {
  return (
    <div>
    {/* <Header/> */}
    <NavBar/>
    <Events/>
    <Footer className="text-white relative bg-gradient-to-b from-[rgb(24,21,13)] via-[rgb(46,60,73)] to-[rgb(52,69,85)]"/>
    </div>
  )
}

export default event