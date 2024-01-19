// Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">News App</div>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
        </div>
        <div className="space-x-4">
          {isLoggedIn ? (
            <button
              className="text-white hover:text-gray-300"
              onClick={onLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/" className="text-white hover:text-gray-300">
                Login
              </Link>
              <Link to="/signuppage" className="text-white hover:text-gray-300">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
