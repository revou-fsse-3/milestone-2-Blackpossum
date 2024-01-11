// Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">News App</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
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
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
              <Link to="/signup" className="text-white hover:text-gray-300">
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
