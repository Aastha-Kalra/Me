import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-black  h-full">
    <BrowserRouter>
    <Navbar />
      <Home/>
      <Services/>
      <About/>
      <Skills/>
    </BrowserRouter>
    </div>
  );
}

export default App;
