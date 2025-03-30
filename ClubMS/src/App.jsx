import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from "./Components/Start";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import UserLogin from "./Components/UserLogin";
import UserSignUp from "./Components/UserSignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/user_signup" element={<UserSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

