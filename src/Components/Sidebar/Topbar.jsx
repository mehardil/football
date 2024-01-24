import { Link } from "react-router-dom";
import logo from "../../assets/football_logo.png";
import { CiMenuBurger } from "react-icons/ci";
import menu from "../../assets/menu-bar.png";

const TopBar = ({ handleChange }) => {
  return (
    <div className="hidden sm:block w-screen z-50 fixed top-0 bg-gray-800 p-2 mb-2">
      <div className="flex justify-between items-center mx-3">
        <Link
          to={"/aboutus"}
          className="flex justify-center items-center border-b-2 border-blue-500 p-2 rounded-xl text-white"
        >
          <img className="w-24 font-bold" src={logo} alt="Logo" />
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to={"/"}
            className="border-b-2 border-red-500 p-2 rounded-xl text-red-500" 
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
