import { Link } from "react-router-dom";
import { Input } from "@mui/base/Input";

const LandingPage = () => {
  return (
    <div className="bg-lime-800">
      <nav>
        <ul className="flex text-center flex-row gap-10">
          <li>
            <Link to="/">
              <h1 className="text-2xl font-bold leading-7 py-8 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                AfterLunch
              </h1>
            </Link>
          </li>
          <li>
            <div className=" flex justify-center items-center hover:bg-black text-white h-[50px] hover:border-4 rounded-lg">
              <Link to="/login">Login</Link>
            </div>
          </li>
          <li>
            <div className=" flex justify-center items-center hover:bg-black text-white h-[50px] hover:border-4 rounded-lg">
              <Link to="/signup">Signup</Link>
            </div>
          </li>
          <li>
            <div className=" flex justify-center items-center hover:bg-black text-white h-[50px] hover:border-4 rounded-lg">
              <Link to="/dashboard">dasboard</Link>
            </div>
          </li>
          <div className="MuiInput-root py-5 rounded-xl">
          <Input type="text" className="MuiInput-Input" />
        </div>  
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
