import React, { useEffect, useState } from "react";
import Offer from "../components/Offer";
import service_box from '../assets/service_box.gif'
import service_boxr from '../assets/service_boxr.gif'
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import { IoLogoHtml5 } from "react-icons/io5";
import TechBox from "../components/TechBox";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import layers from '../assets/layers.mp4'
import maleImg from '../assets/male.png'
import service_box from '../assets/service_box.gif'
import service_boxr from '../assets/service_boxr.gif'



const Hero = () => {


  const isSmallDevice = useMediaQuery({ maxWidth: 767 })



  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  }

  // offers Object 
  const offers = [
    {
      service: "Mobile App Development",
      content: "Creating intuitive mobile applications for iOS and Android platforms that deliver seamless user experiences."
    },
    {
      service: "Web Development",
      content: "Crafting engaging and user-friendly websites that enhance your online presence and drive customer engagement."
    },
    {
      service: "Game Development",
      content: "Immerse your audience in captivating virtual worlds with Lunaredge Pvt. Ltd. game development expertise."
    },
    {
      service: "IT Consulting",
      content: "Expert guidance and strategic advice to optimize your IT infrastructure and achieve operational excellence."
    },
    {
      service: "Cloud Solutions",
      content: "Harnessing the power of cloud technology to improve scalability, security, and efficiency in your business operations."
    },
    {
      service: "Cybersecurity Services",
      content: "Protecting your digital assets with robust cybersecurity measures and proactive threat detection."
    },
    {
      service: "Banking and Financial Services",
      content: "Providing tailored IT solutions for banking and financial institutions, including core banking systems, loan management system, mobile banking apps."
    },
    {
      service: "AI and Machine Learning Solutions",
      content: "Harness the power of artificial intelligence and machine learning with Lunaredge Pvt. Ltd. Our advanced AI solutions are designed to revolutionize."
    },
    {
      service: "Agriculture Technology Solutions",
      content: "Innovating agriculture processes with smart technology solutions such as precision farming, crop monitoring systems, and agricultural data analytics."
    }
  ];

  // technical skill stack 

  const techStack = [
    { name: "HTML", logo: <IoLogoHtml5 className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "CSS", logo: <FaCss3Alt className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "JS", logo: <RiJavascriptFill className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "JAVA", logo: <FaJava className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "REACT", logo: <FaReact className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "NODE JS", logo: <FaNodeJs className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "PYTHON", logo: <FaPython className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "ANDROID", logo: <IoLogoAndroid className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "APPLE", logo: <FaApple className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "EXPRESS", logo: <SiExpress className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "MONGODB", logo: <SiMongodb className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> },
    { name: "AWS", logo: <FaAws className="h-[70px] w-[70px] md:w-[130px] md:h-[100px]" /> }
  ];


  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleButton = () => {
    setShowForm(true);
  };

  // fetching user

  const { user } = useSelector((state) => state.user);

  const [text, setText] = useState("");
  const phrase = 'Empowering Innovation, Transforming Ideas into Reality.';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= phrase.length) {
        setText(phrase.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="w-full h-auto">

      {showForm && <ContactForm onClose={closeForm} />}

      {/* first-part */}
      {/* <div className="w-full h-[1000px]  md:flex justify-around items-center bg-blue-100">  */}
      <div className="w-full h-[700px] md:h-[1000px] p-6 md:p-0 flex justify-center  items-center relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover "
          style={{ zIndex: -1 }} // To place it behind other content
        >
          <source src={layers} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* left content */}
        <div className="flex flex-col  gap-6  md:w-[800px] ">

          <p className=" text-4xl md:text-6xl font-serif text-white">{text}</p>

          {(<div className=" mt-10 md:mt-24">
            <button
              data-aos="zoom-out"

              className=" border border-white bg-purple-400 bg-opacity-30 rounded-full p-3 md:p-4 text-white md:text-lg text-sm  hover:shadow-white hover:shadow-sm hover:scale-95 transition-all duration-300 hero-button"
              onClick={handleButton}
            >
              <span className="md:mx-4">Get connect with us →</span>
            </button>
          </div>)}

        </div>
      </div>
{/* Second-part */}
<div className="w-full h-full">
  <div className="w-full text-center pt-16 md:pt-28">
    {isSmallDevice ? (
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-1 p-4">
          <h1 className="text-3xl md:text-5xl font-medium">Services We Offer</h1>
          <p className="text-sm md:text-lg text-slate-500 my-3 py-2">
            LunarEdge is the perfect choice for any business looking to digitize its operations. We offer a wide range of on-time and cost-effective services that will help solve your complex problems with IT solutions.
          </p>
        </div>
        <div>
          <img src={service_box} alt="Service Overview" className="block md:hidden h-56 w-72 object-cover" />
        </div>
      </div>
    ) : (
      // For larger devices
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-10">
        {/* Left-computer-gif */}
        <div className="flex-1">
          <img src={service_box} alt="Service Overview Left" className="h-64 md:h-80 w-full md:w-auto object-cover" />
        </div>

        {/* Center-content */}
        <div data-aos="zoom-out" data-aos-duration="300" className="flex-1 flex flex-col gap-5 p-4 md:p-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-medium">Services We Offer</h1>
          <p className="text-base md:text-lg text-slate-500 my-3 py-2">
            LunarEdge is the perfect choice for any business looking to digitize its operations. We offer a wide range of on-time and cost-effective services that will help solve your complex problems with IT solutions.
          </p>
        </div>
        {/* Center-content-ends */}

        {/* Right-computer-gif */}
        <div className="flex-1">
          <img src={service_boxr} alt="Service Overview Right" className="h-64 md:h-80 w-full md:w-auto object-cover" />
        </div>
      </div>
    )}
  </div>


        {/* what we offers boxes */}
        <div >
          {isSmallDevice ? (
            // rendering slider for small devices 
            <div className="w-[350px] pl-5 my-8">
              <Slider {...sliderSetting}>
                {offers.map((offer, index) => (
                  <div key={index}>
                    <Offer service={offer.service} content={offer.content} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            // rendering grid-boxex for large-devices 
            <div className="md:flex justify-center items-center">
              <div className="grid grid-cols-1 grid-col-9 md:grid-cols-3 md:grid-rows-3 gap-4 p-3 md:p-0">
                {offers.map((offer, index) => (
                  <Offer key={index} service={offer.service} content={offer.content} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* third part   */}


      {/* technical-skill content  */}
      <div  data-aos-duration="300" className="flex-col p-5 md:p-1  bg-[#6a96e7] border border-none mt-24 md:mt-36">
        <p className=" font-medium md:font-semibold text-center text-2xl md:text-5xl mt-14 md:mt-[100px]">
          Empowering Technologies We Use
        </p>
        <div>
          <p className=" text-sm md:text-xl text-center mt-7 mg:mt-11 text-[#3a3939] md:pb-10">
            Explore the cutting-edge technologies driving our solutions. From AI
            and cloud computing to cybersecurity,<br></br> we harness the latest tools to
            deliver exceptional results.
          </p>
        </div>
      </div>

      {/* rendering technical skill-box  */}
      <div className="md:flex justify-around
       items-center p-4 md:pb-40 border border-none w-auto" style={{
        backgroundImage: `url(${maleImg})`, // Correct syntax
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>

        {/* left side  */}
        <div data-aos={isSmallDevice ? undefined : "fade-up"} data-aos-delay="500"className="shadow-2xl rounded-xl border-black bg-gray-800/50 md:ml-[10%] md:mt-[8%] md:w-[30%] grid grid-rows-4 gap-2 md:gap-5 grid-cols-3 p-3 md:p-6 backdrop-blur-xl" >

          {techStack.map((tech, index) => (
            <TechBox key={index} name={tech.name} logo={tech.logo} />
          ))}
        </div>

        {/* right-side  */}

        <div  data-aos={isSmallDevice ? undefined : "fade-up"} className="hidden md:block">
          <p className="text-7xl bebas-neue-regular space-x-2 drop-shadow-md"><span className="text-[#6a96e7]">Transforming Business</span>{<br></br>} <span className="text-white">With Advance Technology</span></p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
