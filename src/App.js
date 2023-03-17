import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Assignment1 from "./components/Assignment1";
import Assignment2 from "./components/Assignment2";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Assignment1/>}/>
          <Route path="/assignment2" element={<Assignment2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
