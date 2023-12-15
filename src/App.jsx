import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ParticlesContainer from "./particles/ParticlesContainer";
function App() {
  return (
    <div className="min-h-screen bg-black  h-full">
{/* <ParticlesContainer/> */}
    <BrowserRouter>
    
    <ToastContainer/>

    <Navbar />
      <Home/>
      <Services/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
