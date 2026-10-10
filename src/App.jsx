import React from "react";
import { BrowserRouter } from "react-router-dom";
import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F8FAFC] w-full relative overflow-x-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <BrowserRouter>
        <AmbientBackground />
        <ToastContainer
          position="bottom-right"
          theme="dark"
          toastClassName="!bg-[#0A0F1F] !text-white !border !border-blue-500/30 !rounded-xl"
        />
        <Navbar />
        <main>
          <Home />
          <Services />
          <About />
          <Portfolio />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
