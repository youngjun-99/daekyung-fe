import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Process from './pages/Process'
import Products from './pages/Products'
import Facilities from './pages/Facilities'
import Inquiry from './pages/Inquiry'

function App() {
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/products" element={<Products />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>
        <Footer />
    </Router>
  )
}

export default App