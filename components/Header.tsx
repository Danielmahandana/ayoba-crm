import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import Login from './Login';
import user from '../assets/user.png'; // Ensure these images are placed in the public directory
import logoutIcon from '../assets/logout.png'; // Ensure these images are placed in the public directory
import { StoreContext } from '../context/StoreContext';

const Header: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { token, useToken } = useContext(StoreContext);

  const router = useRouter(); // Use Next.js useRouter hook

  const handleLogout = () => {
    localStorage.removeItem('token');
    useToken('');
    router.push('/'); // Use router.push for navigation in Next.js
  };

  return (
    <header>
      <div className="container flex justify-between  items-center">
        <h1>Ayoba CRM</h1>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Login</button>
        ) : (
          <div onClick={handleLogout} className="profile">
            <img src={user.src} alt="User" /> <p className='p'>Log Out</p>
          </div>
        )}
        <nav>
          <Link href="/">Home</Link>
          <Link href="/profile">Customer Profiles</Link>
          <Link href="/pipeline">Sales Pipeline</Link>
        </nav>
      </div>
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </header>
  );
};

export default Header;