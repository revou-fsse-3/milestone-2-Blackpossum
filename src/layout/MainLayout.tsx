import Navbar from "../component/Navbar";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }


  return (
    <div>
      <div>
        <Navbar onLogout={handleLogout} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
