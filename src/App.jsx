import React from 'react'
import Navigation from './Components/Navigation'
import LandingPage from './components/LandingPage'
import SuperGrok from './components/SuperGrok'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navigation />
      <LandingPage />
      <SuperGrok />
      <Footer />
    </div>
  )
}

export default App