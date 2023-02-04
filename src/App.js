import { Route, Routes,  BrowserRouter as Router, Navigate } from "react-router-dom";
import "./App.css"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {user && <Route path="/"  element={<Home />} />}
        <Route path="/signup"  element={<Signup />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
