import { useState } from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    if (localStorage.getItem("Token") === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }

  return (
    <div>
      <div>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;
