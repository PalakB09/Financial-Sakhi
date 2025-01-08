import { GiSesame } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import SakhiLogo from "@/assets/logo_sakhi.png";

interface NavbarProps {
  setLanguage: (lang: 'en' | 'hi') => void;
}

const Navbar: React.FC<NavbarProps> = ({ setLanguage }) => {
  const isMobile = window.innerWidth < 768;
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleLanguageChange = (lang: 'en' | 'hi') => {
    setLanguage(lang);
  };

  return (
    <motion.nav
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex justify-between items-center ${mobileMenuOpen && isMobile && "mb-60"}`}
    >
      {/* Logo and Home Link */}
      <Link to="/" className="flex items-center">
        <GiSesame size={30} className="text-primary" />
        <h1 className="ml-2">Financial Sakhi</h1>
        <img src={SakhiLogo} alt="Logo" className="w-10 h-7" />
      </Link>

      <div className="flex items-center space-x-4">
  <span className="text-sm font-medium text-gray-700"></span>
  <select
    onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'hi')}
    className="bg-primary text-black px-3 py-1 text-sm font-medium rounded-md border border-gray-300 shadow focus:outline-none"
  >
    <option value="en">English</option>
    <option value="en">Tamil</option>
    <option value="en">Telugu</option>
    <option value="hi">Hindi</option>
    <option value="en">Odia</option>
    <option value="en">Bengali</option>
  </select>
</div>

      {/* Desktop Navigation Links and Get Started */}
      <div className="flex items-center ml-auto">
        <ul className="flex items-center">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/services">Services</Link>
          </li>
          <li className="mx-4">
            <Link to="/courses">Courses</Link>
          </li>
        </ul>

        {/* Authenticated User Buttons */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-primary hover:bg-[#e37655] text-black px-8 py-2 rounded-lg mx-4"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/signup"
            className="bg-primary hover:bg-[#e37655] text-black px-4 py-2 rounded-lg ml-4"
          >
            Get Started
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      {isMobile && (
        <button
          className="lg:hidden text-primary px-4 py-2"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? "Close Menu" : "Menu"}
        </button>
      )}

      {/* Mobile Menu Links */}
      {mobileMenuOpen && isMobile && (
        <div className="absolute bg-white shadow-lg w-full left-0 top-16 z-50">
          <Link
            to="/"
            className="block px-4 py-2 text-primary hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-primary hover:bg-gray-200"
          >
            Services
          </Link>
          <Link
            to="/courses"
            className="block px-4 py-2 text-primary hover:bg-gray-200"
          >
            Courses
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-primary hover:bg-gray-200"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/signup"
              className="block px-4 py-2 text-primary hover:bg-gray-200"
            >
              Get Started
            </Link>
          )}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
