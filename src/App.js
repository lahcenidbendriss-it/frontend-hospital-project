import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter as Router
import Nav from './navbar/Nav';
import Info from './Info';
import AddInfo from './Addinfo';
import UpdateInfo from './Updateinfo'; 
import LoginPage from './identification/Loginpage';
import Employepage from './Employepage';

function App() {
  const [userRole, setUserRole] = useState(null);
  const handleLogin = (role) => {
    setUserRole(role);
  };
  return (
    <div>
      {!userRole && <LoginPage onLogin={handleLogin} />}
      {userRole === 'user' && <Employepage />}
      {userRole === 'admin' && (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<AddInfo />} />
            <Route path="/info" element={<Info />} />
            <Route path="/update/:ppr" element={<UpdateInfo />} /> 
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
