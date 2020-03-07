import React from 'react';
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'

import './App.css'

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
        <Home />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;