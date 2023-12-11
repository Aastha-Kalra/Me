import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen bg-black ">
    <BrowserRouter>
    <Navbar />
      <Home/>
      <Services/>
    </BrowserRouter>
    </div>
  );
}

export default App;
