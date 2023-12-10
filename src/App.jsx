import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-black ">
    <BrowserRouter>
    <Navbar />
      <Home/>
    </BrowserRouter>
    </div>
  );
}

export default App;
