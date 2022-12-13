import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/home.jsx'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import About from './pages/About/about'
import Error404 from './pages/Error/error404.jsx'
import OneLodging  from './pages/OneLodging/oneLodging.jsx';

function App(){
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/kasa/" element={<Home />} />
        <Route path="/kasa/apropos" element={<About />} />
        <Route path="/kasa/logements/:id" element={<OneLodging />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App