import React, { useEffect, useState } from "react";
import logo from "../assets/Lunaredge.png";
import "../App.css";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import ContactForm from "./ContactForm";
import LunaredgeLogo from "../assets/Lunaredge.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // usestate for mobile-menu
  const [aboutUs, setAboutUs] = useState(false);
  const [services, setServices] = useState(false);
  const [industries, setIndustries] = useState(false);

  // handle about-us button

  const handleAboutUs = () => {
    setAboutUs(!aboutUs);
  };

  const handleServices = () => {
    setServices(!services);
  };

  const handleIndustries = () => {
    setIndustries(!industries);
  };

  // show form button
  const handleButton = () => {
    setShowForm(true);
  };

  // close form button
  const closeForm = () => {
    setShowForm(false);
  };

  // mobile-menu show button
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //  navbar-opacity handler on-scroll
  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  return (
    <div className=" w-full h-[125px] fixed z-50 px-5 pt-6">
      <div className=" flex bg-white h-full w-full rounded-3xl justify-between items-center px-10 md:px-20 ">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0 mt-4">
          <img
            src={logo}
            alt="Company Logo"
            className="h-auto w-[90px] pt-[5px] md:w-24 md:pt-3"
          />
                  
        </Link>
        {/* Mobile Menu Toggle */}
        <button className="md:hidden block text-black  text-2xl" onClick={toggleMenu}>
          {menuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>

        {/* Nav Links for Desktop */}

        <ul className={`hidden md:flex space-x-4 items-center`}>

          {/* home button */}
         <li>
         <span className=" h-full relative rounded-full text-white bg-[#222222] p-3 px-6 cursor-pointer">
             Home
            </span>
         </li>
          {/* About Us */}
          <li className=" h-full relative rounded-full hover:bg-[#616161] group flex items-center p-3 cursor-pointer transition-all duration-300">
            
            <span className=" text-lg text-black hover:text-white hover:fall-in">
              About Us
            </span>
            <span className="text-lg text-black hover:text-white mt-1">
              <IoIosArrowDown />
            </span>
            <ul className="absolute mt-2 top-[40px] left-0 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-[#292828] w-48 pt-3 pb-3">
              <li >
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-white hover:text-red-500 hover:text-shadow-md-red"
                  >
                    Digital Innovators
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-white hover:text-red-500  hover:text-shadow-md-red"
                  >
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-white hover:text-red-500  hover:text-shadow-md-red"
                  >
                    Careers
                  </Link>
                </li>
              </li>
            </ul>
          </li>

          {/* Services */}
          <li className="h-full relative rounded-full hover:bg-[#616161] group flex items-center p-3 cursor-pointer transition-all duration-300">
            <span className="text-lg text-black group-hover:text-white">
              Services
            </span>
            <span className="text-lg text-black group-hover:text-white mt-1">
              <IoIosArrowDown />
            </span>
            <ul className="absolute mt-2 top-[40px] left-0 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-[#292828] w-48 pt-3 pb-3">
              <li >
                <Link
                  to="/common"
                  className="block px-4 py-2  text-white hover:text-red-500  hover:text-shadow-md-red"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2  text-white hover:text-red-500  hover:text-shadow-md-red "
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2  text-white hover:text-red-500  hover:text-shadow-md-red"
                >
                  IT Consulting
                </Link>
              </li>
            </ul>
          </li>

          {/* Industries */}
          <li className="h-full relative rounded-full hover:bg-[#616161] group flex items-center p-3 cursor-pointer transition-all duration-300">
            <span className="text-lg text-black group-hover:text-white">
              Industries
            </span>
            <span className="text-lg text-black group-hover:text-white mt-1">
              <IoIosArrowDown />
            </span>
            <ul className="absolute mt-2 top-[40px] left-0 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-[#292828] w-48 pt-3 pb-3">
              <li>
                <Link
                  to="/common"
                  className="translate-x-2 block px-4 py-2  text-white hover:text-red-500  hover:text-shadow-md-red"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2  text-white hover:text-red-500  hover:text-shadow-md-red"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2  text-white hover:text-red-500  hover:text-shadow-md-red"
                >
                  Ecommerce
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* Contact Us */}
        <div className="md:block hidden">
          <button
            className="  rounded-full  py-4 px-8 text-black text-md hover:bg-[#703299] border border-[#703299] hover:text-white hover:shadow-md   hover:bg-gradient-to-r from-[#386bb7] to-[#e24c4a] transition-all duration-100"
            onClick={handleButton}
          >
            Contact Us
          </button>
        </div>
         {/* Mobile Menu */}
         {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-auto bg-white z-40 md:hidden flex flex-col transition-all duration-500 overflow-auto pb-5 rounded-b-lg">
            {/* header  */}
            <div className="flex justify-between items-center p-2">
              <img src={LunaredgeLogo} alt="lunarEdge" className="h-16 w-20" />
              <button className="text-4xl" onClick={toggleMenu}>
                <IoIosClose />
              </button>
            </div>
            <hr />
            {/* lower-content  */}
            <ul className="flex flex-col  items-start mt-3 pl-4 transition-all duration-300 ">
              <li
                className=" w-28 py-2 flex flex-col gap-1 items-center cursor-pointer transition-all duration-700"
                onClick={handleAboutUs}
              >
                <div className="flex gap-1 items-center">
                  <span className=" text-md text-[#082847] hover:underline">
                    About Us
                  </span>
                  <IoIosArrowDown />
                </div>
                {/* showing semi-links on clicking about-us  */}

                {
                  <ul
                    className={` ${
                      aboutUs ? "block" : "hidden "
                    } mt-1 ml-20 pt-1 pb-4  w-auto  transition-all duration-500`}
                  >
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-48 text-sm"
                      >
                        Digital Innovators
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                      >
                        Our Clients
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              {/* services  */}
              <li
                className=" w-28 py-2 flex flex-col gap-1 items-center cursor-pointer transition-all duration-700 mr-1"
                onClick={handleServices}
              >
                <div className="flex gap-1 items-center mr-2">
                  <span className=" text-md text-[#082847] hover:underline">
                    Services
                  </span>
                  <IoIosArrowDown />
                </div>
                {/* showing semi-links on clicking about-us  */}

                {
                  <ul
                    className={` ${
                      services ? "block" : "hidden "
                    } mt-1 ml-28 pt-1 pb-4  w-auto  transition-all duration-500`}
                  >
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-48 text-sm"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-56 text-sm"
                      >
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                      >
                        IT Consulting
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              {/* Industries */}
              <li
                className=" w-28 py-2 flex flex-col gap-1 items-center cursor-pointer transition-all duration-700"
                onClick={handleIndustries}
              >
                <div className="flex gap-1 items-center ml-1">
                  <span className=" text-md text-[#082847] hover:underline">
                    Industries
                  </span>
                  <IoIosArrowDown />
                </div>
                {/* showing semi-links on clicking about-us  */}

                {
                  <ul
                    className={` ${
                      industries ? "block" : "hidden "
                    } mt-1 ml-28 pt-1 pb-4  w-auto  transition-all duration-500`}
                  >
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-48 text-sm"
                      >
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-56 text-sm"
                      >
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                      >
                        Ecommerce
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              <li className="py-2  flex gap-1 items-center">
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
     {showForm && <ContactForm onClose={closeForm} />}

    </div>
  );
};

export default Header;
