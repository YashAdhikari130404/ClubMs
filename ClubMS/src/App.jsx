import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './Components/Start';
import Login from './Components/Login';
import Home from './Components/pages/home';
import UserLogin from './Components/UserLogin';
import UserSignUp from './Components/UserSignUp';
import Club from './Components/pages/clubs';
import Logout from './Components/pages/logout';
import Profile from './Components/pages/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mynavbar from './Components/inc/Navbar'; // Import Navbar

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap Home with Navbar */}
        <Route
          path="/home"
          element={
            <>
              <Mynavbar /> {/* Show Navbar ONLY on Home Page */}
              <Home />
            </>
          }
        />
        
        {/* Other Pages without Navbar */}
        <Route path="/" element={<Start />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/user_signup" element={<UserSignUp />} />
        <Route path="/clubs" element={<Club />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

