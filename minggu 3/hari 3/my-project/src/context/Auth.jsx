import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import Login from '../src/pages/Login';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardUser from './pages/DashboardUser';

const Auth = () => {
  const [role ,setRole] = useState(null)
  const handleLogin = (userRole) => {
    setRole(userRole);
  };
  return (
    <>
    <BrowserRouter router={Router}>
    
    <Router>
        <Route path="/Login">
          {role ? <Navigate to="/DashboardAdmin" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/" exact>
          {role === 'user' ? <DashboardUser /> : role === 'admin' ? <DashboardAdmin /> : <Navigate to="/Login" />}
        </Route>
    </Router>
    
    </BrowserRouter>


    <Navbar/>

    <Outlet/>
  </>
  )
}


export default Auth
