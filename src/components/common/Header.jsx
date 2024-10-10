import React, { useEffect, useState,useContext } from 'react';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSignInAlt, faGlobe,faPhone,faSignOutAlt,faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import img01 from '../../assets/images/bg1.jpg';
import img04 from '../../assets/images/bg2.jpg';
import img05 from '../../assets/images/bg3.jpg';

import img02 from '../../assets/images/page-1_slide02.jpg';
import img03 from '../../assets/images/page-1_slide03.jpg';
import { useNavigate } from "react-router-dom";
import { LoginContext  } from '../../context/AuthContext'; 
import axios from 'axios';

import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
  const navigate = useNavigate();
  const { logindata, setLoginData } = useContext(LoginContext);

  const [text, setText] = useState('');
  const fullText = "Beauty starts with a smile and veneers";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const linkToProfile = () => {
    let idpatient = localStorage.getItem("patientdataId");
    navigate(`/profile/${idpatient}`);
  };
  
  const logoutPatient = async () => {
    try {
      const token = localStorage.getItem("patientdatatoken");
  
      const response = await axios.get("http://127.0.0.1:1129/api/patient/logout", {
        headers: {
          "Authorization": token,
        },
      });
  
      const data = response.data;
  
      if (data.status === 201) {
        console.log("User logged out successfully");
  
        localStorage.removeItem("patientdatatoken");
        localStorage.removeItem("patientdataId");
        setLoginData(false);
        navigate("/auth");
      } else {
        console.log("Error logging out user");
      }
    } catch (error) {
      console.error("Error logging out user:", error);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setText(text + fullText.charAt(index));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText(text.slice(0, -1));
        setIndex(index - 1);
      }

      if (index === fullText.length) {
        setIsDeleting(true);
        setSpeed(100);  // Speed of deleting
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setSpeed(500);  // Delay before typing starts again
      } else {
        setSpeed(isDeleting ? 50 : 150);  // Speed of typing
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed]);


  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('http://127.0.0.1:1129/api/crm/settings');
        const data = await response.json();
        if (response.ok) {
          setHeaderData({
            address: data.address || '',
            email: data.email || '',
            phone: data.phoneNumber || '',
            logo: data.logoImage || ''
          });
        } else {
          console.error('Failed to fetch settings:', data.error);
        }
      } catch (error) {
        console.error('Failed to fetch settings:', error.message);
      }
    };

    fetchSettings();
  }, []);


  const [headerData, setHeaderData] = useState({
    address: '123 Example St, City',
    email: 'email@example.com',
    phone: '123-456-7890',
    logo: 'path/to/logo.png'
  });


  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "FR" : "EN"));
  };
  const tooglelogin= () => {
    navigate("/auth");
  }

    // Settings for the carousel
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

    
  return (
    
    <header>
      
 <div className="top-bar">
  <div className="top-bar-container">
    <div className="left flex items-center">
      <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '10px' }} />

      <FontAwesomeIcon icon={faPhone} />
      <span style={{ marginRight: '15px' }}>{headerData.phone}</span>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      <span>{headerData.address}</span>
    </div>
    <div className="right flex items-center">
      <button onClick={toggleLanguage} className="text-white">
        <FontAwesomeIcon icon={faGlobe} /> {language}
      </button>
      {logindata ? (
        <>
         <button onClick={linkToProfile} className="text-white">
         <FontAwesomeIcon icon={faUser} /> Profile
       </button>
        <button onClick={logoutPatient} className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
        </>
      ) : (
        <button onClick={tooglelogin} className="text-white">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </button>
      )}
    </div>
  </div>
</div>

       {/* Use Slider component with settings */}
        <div className="">
        <Slider {...settings} >
        <div><img src={img01} alt="Slide 1" /></div>
<div><img src={img04} alt="Slide 2" /></div>
<div><img src={img05} alt="Slide 3" /></div>

            </Slider>
          <div className="camera-text">
            <span className="typing-effect">{text}</span>
            <br />
            <button className="btn1 action-button">Rendez-vous</button>
          </div>
        </div>
      <div className="main-brand">
        <div className="container">
          <div className="brand">
            <h1 className="brand_name">
              <a href="/">
                <img className="logo" src={headerData.logo} alt="" />
              </a>
            </h1>
          </div>
        </div>
      </div>
      <Nav/>
    </header>
  );
}

export default Header;
