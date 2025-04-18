import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './Components/inc/Navbar';
import Start from './Components/Start';
import Login from './Components/Login';
import Home from './Components/pages/home';
import UserLogin from './Components/UserLogin';
import UserSignUp from './Components/UserSignUp';
import Club from './Components/pages/clubs';
import Logout from './Components/pages/logout';
import Profile from './Components/pages/profile';
import Nsshome from './Components/clubs/nss/nsshome';
import Nssactivity from './Components/clubs/nss/activity';
import Nssteam from './Components/clubs/nss/team';
import Joinnss from './Components/clubs/nss/joinnss';
import Dashboard from './Components/admin/dashboard';
import ManageClub from './Components/admin/manageclub';
import ManageMember from './Components/admin/managemembers';
import Notice from './Components/admin/notice';
import Addclubs from './Components/admin/addclub';
import Addmember from './Components/admin/addmember';
import Deletemember from './Components/admin/deletemember';
import ViewMember from './Components/admin/viewmember';
import AdminDashboardOverview from './Components/admin/Admindashboard';
import Paschome from './Components/clubs/pasc/paschome' ;
import Pascactivity from './Components/clubs/pasc/pascactivity';
import Joinpasc from './Components/clubs/pasc/pascjoin';
import Pascteam from './Components/clubs/pasc/pascteam';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/user_signup" element={<UserSignUp />} />
        <Route path="/clubs" element={<Club />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/nss-home" element={<Nsshome />} />
        <Route path="/nss-activity" element={<Nssactivity />} />
        <Route path="/nss-team" element={<Nssteam />} />
        <Route path="/nss-join" element={<Joinnss />} />
        <Route path="/pasc-home" element={<Paschome />} />
        <Route path='/pasc-activity' element={<Pascactivity />} />
        <Route path='/pasc-team' element={<Pascteam />} />
        <Route path='/pasc-join' element={<Joinpasc />} />

        <Route path="/admin-dashboard" element={<Dashboard />}>
          <Route index element={<AdminDashboardOverview />} />
          <Route path='/admin-dashboard/clubmanage' element={<ManageClub />}/>
          <Route path='/admin-dashboard/membermanage' element={<ManageMember />} />
          <Route path='/admin-dashboard/notices' element={<Notice />} />
          <Route path='admin-dashboard/adminlogin' element={<Login />} />
          <Route path='/admin-dashboard/addclubs' element={<Addclubs />} />
          <Route path='/admin-dashboard/addmember' element={<Addmember />} />
          <Route path='/admin-dashboard/deletemember' element={<Deletemember />} />
          <Route path='/admin-dashboard/viewmember' element={<ViewMember />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


