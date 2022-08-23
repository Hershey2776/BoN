import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Features/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/about" element={<Gallery />}></Route>
            <Route exact path="/about" element={<Contact />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
