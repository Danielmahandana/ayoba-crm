// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Login from './Login';

const Header: React.FC = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <>
      <header>
        <div className="container flex justify-between items-center">
          <h1>Ayoba CRM</h1>
          <button onClick={() => setShowLogin(true)}>Login</button>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/profile">Customer Profiles</Link>
            <Link href="/pipeline">Sales Pipeline</Link>
          </nav>
        </div>
      </header>
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </>
  );
};

export default Header;