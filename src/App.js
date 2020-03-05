import React from 'react';
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'

import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <Header/>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

export default App;