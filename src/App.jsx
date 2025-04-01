
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Mynavbar from './components/inc/Navbar'
import Club from './components/pages/clubs'
import Home from './components/pages/home'
import Logout from './components/pages/logout'
import Profile from './components/pages/profile'


function App() {
  return (
    <Router>
      <Mynavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Club />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App
