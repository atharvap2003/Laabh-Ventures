import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RxTriangleDown, RxTriangleUp, RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Homepage = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aboutRef = useRef(null); // Reference for the about button and dropdown

  const handleAboutClick = () => {
    setAboutOpen(!aboutOpen);
  };

  const handleClickOutside = (event) => {
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setAboutOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggles the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="container mx-auto lg:py-4 py-4 tracking-widest shadow-md  ">
      {/* Navbar for desktop */}
      <nav className="flex justify-between items-center py-2 lg:py-4 mx-8 lg:mx-28">
        <Link to="/" className="text-lg lg:text-2xl font-bold font-sans">
          Laabh Ventures
        </Link>

        {/* Hamburger icon for mobile */}
        <button
          className="lg:hidden text-3xl"
          onClick={toggleMobileMenu}
        >
          <RxHamburgerMenu />
        </button>

        {/* Navbar links for desktop */}
        <ul className="hidden lg:flex items-center space-x-6 text-base uppercase font-normal">
          <li className="hover:text-gray-500">
            <Link to="/">Home</Link>
          </li>
          <li className="relative" ref={aboutRef}>
            <p
              className="flex items-center cursor-pointer hover:text-gray-400"
              onClick={handleAboutClick}
            >
              ABOUT US
              {aboutOpen ? (
                <RxTriangleDown className="ml-2" />
              ) : (
                <RxTriangleUp className="ml-2" />
              )}
            </p>
            {aboutOpen && (
              <ul className="absolute mt-2 bg-white shadow-lg rounded-md p-4 z-10 min-w-48">
                <li className="mb-2">
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="mb-2">
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li className="mb-2">
                  <Link to="/complaints-record">Complaints Record</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Full-screen mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 text-4xl text-white"
              onClick={toggleMobileMenu}
            >
              <RxCross2 />
            </button>
            <ul className="space-y-8 text-white text-lg uppercase font-semibold">
              <li>
                <Link to="/" onClick={toggleMobileMenu}>Home</Link>
              </li>
              <li>
                <Link to="/contact-us" onClick={toggleMobileMenu}>Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" onClick={toggleMobileMenu}>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" onClick={toggleMobileMenu}>Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/complaints-record" onClick={toggleMobileMenu}>Complaints Record</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Homepage;
