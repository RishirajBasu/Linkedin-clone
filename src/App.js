import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exaxt path="/" element={<Login />}></Route>
          {/* rendering multiple components with the same path  */}
          <Route exact path="/home" element={<><Header/><Home/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
