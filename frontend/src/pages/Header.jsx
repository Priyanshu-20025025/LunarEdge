import React, { useEffect, useState } from "react";
import logo from "../assets/Lunaredge.png";
import "../App.css";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import ContactForm from "./ContactForm";
import LunaredgeLogo from "../assets/Lunaredge.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [showForm, setShowForm] = useState(false); // State to show/hide contact form
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isTouchDevice, setIsTouchDevice] = useState(false); // State to check if the device is touch-enabled
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage which dropdown is open

  // States for managing dropdowns in mobile menu
  const [aboutUs, setAboutUs] = useState(false);
  const [services, setServices] = useState(false);
  const [industries, setIndustries] = useState(false);

  // Handle dropdown toggles for mobile menu
  const handleAboutUs = () => {
    setAboutUs(!aboutUs);
    if (industries) {
      setIndustries(!industries);
    }
    if (services) {
      setServices(!services);
    }
  };

  const handleServices = () => {
    setServices(!services);
    if (aboutUs) {
      setAboutUs(!aboutUs);
    }
    if (industries) {
      setIndustries(!industries);
    }
  };

  const handleIndustries = () => {
    setIndustries(!industries);
    if (services) {
      setServices(!services);
    }
    if (aboutUs) {
      setAboutUs(!aboutUs);
    }
  };

  // Show contact form
  const handleButton = () => {
    setShowForm(true);
  };

  // Close contact form
  const closeForm = () => {
    setShowForm(false);
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle mouse enter/leave for dropdowns
  const handleMouseEnter = (dropdownName) => {
    if (!isTouchDevice) {
      setOpenDropdown(dropdownName);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    // Check if the device is touch-enabled
    const isTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouchScreen);
  }, []);

  // Handle dropdown toggle on touch devices
  const handleDropdownToggle = (dropdownName) => {
    if (isTouchDevice) {
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  return (
    <div className="w-full h-[90px] md:h-[125px] fixed z-50 pt-3 px-3 md:px-5 md:pt-6">
      <div className="box flex bg-white h-full w-full rounded-xl md:rounded-3xl justify-between items-center px-4 xl:px-10">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0 ">
          <img
            src={logo}
            alt="Company Logo"
            className="h-auto w-[80px] pt-[5px] md:w-24 md:pt-3"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden block text-black text-xl"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>

        {/* Nav Links for Desktop */}
        <ul className="hidden lg:flex space-x-4 items-center">
          <li>
            <Link
              to="/"
              className=" h-full relative rounded-full text-black text-lg hover:text-white hover:bg-[#616161] p-3 px-6 cursor-pointer transition-all duration-300"
              onClick={() => handleDropdownToggle()}
            >
              Home
            </Link>
          </li>

          {/* About Us Dropdown */}
          <li
            className="h-full relative flex items-center px-2 py-4 cursor-pointer transition-all duration-300"
            onClick={() => handleDropdownToggle("aboutUs")}
            onMouseEnter={
              !isTouchDevice ? () => handleMouseEnter("aboutUs") : null
            }
            onMouseLeave={!isTouchDevice ? handleMouseLeave : null}
          >
            <div className="flex items-center justify-between rounded-full p-3">
              <span className="text-lg text-black">About LunarEdge</span>
              <IoIosArrowDown />
            </div>
            {openDropdown === "aboutUs" && (
              <ul className="absolute top-[63px] left-0 rounded-lg shadow-lg bg-[#292828] w-48 pt-3 pb-3">
                <li>
                  <Link
                    to="/aboutLunarEdge/aboutUs"
                    className="block px-4 py-2 text-white hover:text-red-500"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-white hover:text-red-500"
                  >
                    Digital Innovators
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-white hover:text-red-500"
                  >
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-white hover:text-red-500"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            )}
          </li>


          {/* Industries Dropdown */}
          <li
            className="h-full relative flex items-center px-2 py-4 cursor-pointer transition-all duration-300"
            onClick={() => handleDropdownToggle("industries")}
            onMouseEnter={
              !isTouchDevice ? () => handleMouseEnter("industries") : null
            }
            onMouseLeave={!isTouchDevice ? handleMouseLeave : null}
          >
            <div className="flex items-center justify-between rounded-full p-3">
              <span className="text-lg text-black">Industries</span>
              <IoIosArrowDown />
            </div>
            {openDropdown === "industries" && (
              <ul className="absolute top-[63px] left-0 rounded-lg shadow-lg bg-[#292828] w-40 pt-3 pb-3">
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-white hover:text-red-500"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-white hover:text-red-500"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-white hover:text-red-500"
                  >
                    Ecommerce
                  </Link>
                </li>
              </ul>
            )}
          </li>

          
          {/* Services Dropdown */}
          <li>
            <Link
              to="/career"
              className="h-full relative rounded-full text-black text-lg hover:text-white hover:bg-[#616161] p-3 px-6 cursor-pointer transition-all duration-300"
              onClick={() => handleDropdownToggle()}
            >
              Career
            </Link>
          </li>
            {/* {openDropdown === "services" && (
              <div className="flex absolute top-[63px] left-0 rounded-lg shadow-lg bg-[#292828] w-auto pt-3 pb-3">
                <ul className="">
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      IT Consulting
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Cloud Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      CyberSecurity Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Game Development
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Banking Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      AI Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Game Development
                    </Link>
                  </li>
                </ul>
              </div> */}
            {/* )}
          </li> */}
        </ul>

        {/* Contact Us Button */}
        <div className=" hidden lg:block items-center">
          <button
            className="rounded-full py-4 px-8 text-black text-md hover:bg-[#703299] border border-[#703299] hover:text-white hover:shadow-md hover:bg-gradient-to-r from-[#386bb7] to-[#e24c4a] transition-all duration-100"
            onClick={handleButton}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-auto bg-white z-40 lg:hidden flex flex-col transition-all duration-500 overflow-auto pb-5 rounded-b-lg "
            data-aos="fade-down"
            data-aos-duration="200"
          >
            {/* Mobile menu header */}
            <div className="flex justify-between items-center p-2">
              {/* Mobile logo */}
              <Link to={"/"}>
                <img
                  src={LunaredgeLogo}
                  alt="lunarEdge"
                  className="h-auto w-[80px]"
                />
              </Link>
              <button className="text-4xl" onClick={toggleMenu}>
                <IoIosClose />
              </button>
            </div>
            <hr />
            {/* lower-content  */}
            <ul className="w-35 flex flex-col  items-start mt-3 pl-4 transition-all duration-300 ">
              <li
                className="  py-2 flex flex-col gap-1 items-center cursor-pointer transition-all duration-700"
                onClick={handleAboutUs}
              >
                <div className="flex gap-1 items-center">
                  <span className=" text-md text-[#082847] hover:underline">
                    About LunarEdge
                  </span>
                  <IoIosArrowDown />
                </div>
                {/* About Us sub-items */}
                {
                  <ul
                    className={` ${
                      aboutUs ? "block" : "hidden"
                    } mt-1 ml-0 pt-1 pb-4 w-auto transition-all duration-500`}
                  >
                    <li>
                      <Link
                        to="AboutLunarEdge/AboutUs"
                        className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm "
                        onClick={toggleMenu}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm "
                        onClick={toggleMenu}
                      >
                        Our Clients
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/career"
                        className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm "
                        onClick={toggleMenu}
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              {/* Services */}
              <li
                className=" w-35 py-2 flex flex-col gap-1 cursor-pointer transition-all duration-700 mr-1"
                onClick={handleServices}
              >
                <div className="flex gap-1 mr-2 items-center">
                  <span className="text-md text-[#082847] hover:underline">
                    Services
                  </span>
                  <IoIosArrowDown />
                </div>
                {/* Services sub-items */}
                {
                  <ul
                    className={` ${
                      services ? "block" : "hidden"
                    } mt-1 pt-1 pb-4 w-auto transition-all duration-500`}
                  >
                    <li>
                      <Link
                        to="/common"
                        className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-56 text-sm"
                        onClick={toggleMenu}
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-56 text-sm"
                        onClick={toggleMenu}
                      >
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-56 text-sm"
                        onClick={toggleMenu}
                      >
                        IT Consulting
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              {/* Industries */}
              <li
                className=" w-35 py-2 flex flex-col gap-1  cursor-pointer transition-all duration-700"
                onClick={handleIndustries}
              >
                <div className="flex gap-1 items-center ">
                  <span className="text-md text-[#082847] hover:underline">
                    Industries
                  </span>
                  <IoIosArrowDown />
                </div>
                {/* Industries sub-items */}
                {
                  <ul
                    className={` ${
                      industries ? "block" : "hidden"
                    } mt-1  pt-1 pb-4 w-auto transition-all duration-500`}
                  >
                    <li>
                      <Link
                        to="/common"
                        className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-48 text-sm"
                        onClick={toggleMenu}
                      >
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-56 text-sm"
                        onClick={toggleMenu}
                      >
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                        onClick={toggleMenu}
                      >
                        Ecommerce
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              {/* Contact Us Button */}
              <li className="py-2 items-center">
                <button
                  className="bg-black text-white p-2 md:p-3 rounded-md"
                  onClick={() => {
                    handleButton();
                    toggleMenu();
                  }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Contact Form */}
      {showForm && <ContactForm onClose={closeForm} />}
    </div>
  );
};

export default Header;
