import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginContext } from './context/AuthContext.jsx';
import HomePage from './components/HomePage.jsx';
import ContactPage from './components/ContactPage.jsx';
import ReservationPage from './components/ReservationPage.jsx';
import DevisPage from './components/DevisPage.jsx';
import PricesPage from './components/PricesPage.jsx';
import BlogPage from './components/BlogPage.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import AuthPage from './components/AuthPage.jsx';
import Layout from './Layout';

import WOW from 'wow.js';
import 'animate.css';
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// CSS imports
import './assets/css/grid.css';
import './assets/css/style.css';
import './assets/css/camera.css';
import './assets/css/owl-carousel.css';
import './assets/css/google-map.css';
import './assets/css/fl-fill-round-icons.css';
import './assets/css/animate.css';

function App() {
  const [data, setData] = useState(false);
  const { logindata, setLoginData } = useContext(LoginContext);
  const navigate = useNavigate();
  

  const validPatien = async () => {
    let token = localStorage.getItem("patientdatatoken");
    let id = localStorage.getItem("patientdataId");
  
    try {
      const decodedToken = jwtDecode(token)
      const currentTime = Date.now() / 1000
  
      if (decodedToken.exp < currentTime) {
        await axios.post("http://127.0.0.1:1129/api/patient/deleteToken",{patientId:id,tokenToDelete:token})
        await localStorage.removeItem("patientdatatoken");
        await localStorage.removeItem("patientdataId");
        await setLoginData(false);
        await navigate("/auth");

        return;
      }
  
      const res = await axios.get(
        "http://127.0.0.1:1129/api/patient/validPatient",
        {
          headers: {
            Authorization: token,
          },
          tokenLocalStorage: token
        }
      );
  
      const data = res.data;
  
      if (data.status === 401 || !data) {
        localStorage.removeItem("patientdatatoken");
        localStorage.removeItem("patientdataId");
        setLoginData(false);
        navigate("/auth");

    
      } else {
        console.log("User verified");
        setLoginData(data);
      }
    } catch (error) {
      console.error("Error checking user validation:", error);
    }
  };
  useEffect(() => {
    new WOW().init();
    //  setTimeout(() => {

    // }, 1000);
    validPatien();
    setData(true);
  }, []);
// app.use(cookieParser());
  return (
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/contacts" element={<Layout><ContactPage /></Layout>} />
          <Route path="/reservation" element={<Layout><ReservationPage /></Layout>} />
          <Route path="/devis" element={<Layout><DevisPage /></Layout>} />
          <Route path="/prices" element={<Layout><PricesPage /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />

          <Route path="/auth" element={<AuthPage />} />

        </Routes>
  );
}

export default App;
