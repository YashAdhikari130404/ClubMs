
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Mynavbar from './components/inc/Navbar'
import Club from './components/pages/clubs'
import Home from './components/pages/home'
import Logout from './components/pages/logout'
import Profile from './components/pages/profile'
import Nsshome from './components/clubs/nss_club/nsshome';
import Nssactivity from './components/clubs/nss_club/activity';
import Nssteam from './components/clubs/nss_club/team';
import Joinnss from './components/clubs/nss_club/joinnss';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Club />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/nss-home" element={<Nsshome />} /> 
        <Route path="/nss-activity" element={<Nssactivity />} /> 
        <Route path="/nss-team" element={<Nssteam />} /> 
        <Route path="/nss-join" element={<Joinnss />} /> 
      </Routes>
    </Router>
  );
}

export default App
