import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "/src/styles/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Product from "./pages/Product";
import Facilities from "./pages/Facility";
import Inquiry from "./pages/Inquiry";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:tab" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/process/:tab" element={<Process />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:tab" element={<Product />} />
          <Route path="/facility" element={<Facilities />} />
          <Route path="/facility/:tab" element={<Facilities />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
