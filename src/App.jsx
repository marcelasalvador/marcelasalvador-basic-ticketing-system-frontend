import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage'
import AdminTicketPage from './pages/AdminTicketPage';
import UserDashboardPage from './pages/UserDashboardPage'
import NewTicketPage from './pages/NewTicketPage';
import UserTicketPage from './pages/UserTicketPage';


import Navbar from './components/Navbar';
import IsAnon from './components/IsAnon';
import IsAdmin from './components/IsAdmin';
import IsUser from './components/IsUser';

import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/admin-dashboard" element={<IsAdmin> <AdminDashboardPage /> </IsAdmin>} />
        <Route path="/admin-ticket-page" element={<IsAdmin> <AdminTicketPage /> </IsAdmin>} />
        <Route path="/user-dashboard" element={<IsUser> <UserDashboardPage /> </IsUser>} />
        <Route path="/user-ticket-page" element={<IsUser> <UserTicketPage /> </IsUser>} />
        <Route path="/new-ticket" element={<IsUser> <NewTicketPage /> </IsUser>} />

      </Routes>
    </div>
  )
}

export default App
