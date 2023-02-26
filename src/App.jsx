import Login from './pages/Login';
import ClientSignup from './pages/ClientSignup';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import IsAdmin from './components/IsAdmin';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard'
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<IsAnon><ClientSignup /></IsAnon>} />
        <Route path="/login" element={<IsAnon><Login /></IsAnon>} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App
