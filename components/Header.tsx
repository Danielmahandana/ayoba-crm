import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import Login from './Login';
import user from '../assets/user.png'; // Ensure these images are placed in the public directory
import logoutIcon from '../assets/logout.png'; // Ensure these images are placed in the public directory
import { StoreContext } from '../context/StoreContext';

const Header: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);
  const { token, setToken } = useContext(StoreContext);

  const router = useRouter(); // Use Next.js useRouter hook

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken("");
    router.push('/'); // Use router.push for navigation in Next.js
  };

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1>Ayoba CRM</h1>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Login</button>
        ) : (
          <div onClick={handleLogout} className="profile">
            <img src={user.src} alt="User" /> <p className='p'>Log Out</p>
          </div>
        )}
      </div>
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </header>
  );
};

export default Header;