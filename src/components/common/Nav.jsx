import React, { useState, useEffect,useContext }from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { LoginContext  } from '../../context/AuthContext'; 
import axios from 'axios';


const Nav = () => {
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);
  const location = useLocation();
  const [activeTitle, setActiveTitle] = useState('About us');
  const [isSticky, setSticky] = useState(false);
  const { logindata, setLoginData } = useContext(LoginContext);
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) { 
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
  
    return location.pathname.startsWith(path);
  };
  
  const toggleMobilePanel = () => {
    setIsMobilePanelOpen(!isMobilePanelOpen);
  };

  const handleMenuItemClick = (pageTitle) => {
    setActiveTitle(pageTitle);
    setIsMobilePanelOpen(false);
  };
// const handleLogout = async () => {
//   try {
//     const token = localStorage.getItem("patientdatatoken");

//     const response = await fetch("http://localhost:1128/api/patient/logout", {
//       method: 'GET', 
//       headers: {
//         "Authorization": `Bearer ${token}`, // Adjusted for typical Bearer token usage
//         "Content-Type": "application/json"
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error logging out user: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json();
//     if (data.status === 201) {
//       console.log("User logged out successfully");
//       localStorage.removeItem("patientdatatoken");
//       localStorage.removeItem("patientdataId");
//       setLoginData(false);
//       navigate("/");
//     } else {
//       throw new Error("Failed to logout due to server error");
//     }
//   } catch (error) {
//     console.error("Error logging out user:", error);
//     alert(error.message); // Providing feedback to the user
//   }
// };
axios.defaults.withCredentials = true;

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

  return (
    <>
      {/* Mobile Panel */}
      <div className="rd-mobilepanel">
        <button className={`rd-mobilepanel_toggle ${isMobilePanelOpen ? 'active' : ''}`} onClick={toggleMobilePanel}>
          <span></span>
        </button>
        <h2 className="rd-mobilepanel_title">{activeTitle}</h2>
      </div>

      {/* Mobile Menu */}
      <div className={`rd-mobilemenu ${isMobilePanelOpen ? 'active' : ''}`}>
        <ul className="rd-mobilemenu_ul" onClick={() => setIsMobilePanelOpen(false)}>
          {/* Mobile menu items */}
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/" onClick={() => handleMenuItemClick("About Us")}>About Us</Link>
          </li>
          <li className={isActive('/services') ? 'active' : ''}>
            <Link to="/services" onClick={() => handleMenuItemClick("Services")}>Services</Link>
          </li>
          <li className={isActive('/prices') ? 'active' : ''}>
            <Link to="/prices" onClick={() => handleMenuItemClick("Prices")}>Gallerie</Link>
          </li>
          <li className={isActive('/blog') ? 'active' : ''}>
            <Link to="/blog" onClick={() => handleMenuItemClick("Latest News")}>Temoignage</Link>
          </li>
          <li className={isActive('/reservation') ? 'active' : ''}>
            <Link to="/reservation" onClick={() => handleMenuItemClick("Reserver Maintenant")}>Reservez</Link>
          </li>
          <li className={isActive('/devis') ? 'active' : ''}>
            <Link to="/devis" onClick={() => handleMenuItemClick("Devis")}>Devis</Link>
          </li>
      
          <li className={isActive('/contacts') ? 'active' : ''}>
            <Link to="/contacts" onClick={() => handleMenuItemClick("Contacts")}>Contactez nous</Link>
          </li>
          {/* More menu items... */}
        </ul>
      </div>

      {/* Full-screen navigation (desktop) */}
      <div id="stuck_container" className={`stuck_container ${isSticky ? 'isStuck' : ''}`}>
  <div className="container">
    <nav className="nav">
      <ul className="sf-menu" data-type="navbar">
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">À propos</Link>
        </li>
        <li className={isActive('/services') ? 'active' : ''}>
          <Link to="/services">Services</Link>
        
        </li>
        <li className={isActive('/prices') ? 'active' : ''}>
          <Link to="/prices">Gallerie</Link>
        </li>
        <li className={isActive('/blog') ? 'active' : ''}>
          <Link to="/blog">Temoignage</Link>
        </li>
        <li className={isActive('/reservation') ? 'active' : ''}>
          <Link to="/reservation">Réservez</Link>
        </li>
        <li className={isActive('/devis') ? 'active' : ''}>
          <Link to="/devis">Devis</Link>
        </li>
        <li className={isActive('/contacts') ? 'active' : ''}>
          <Link to="/contacts">Contactez nous</Link>
        </li>
         {/* Full-screen navigation (desktop) 
    
        {logindata ? (
          <li>
            <Link onClick={logoutPatient}>Se déconnecter</Link>
          </li>
        ) : (
          <li className={isActive('/auth') ? 'active' : ''}>
            <Link to="/auth">Se connecter</Link>
          </li>
        )}*/}
      </ul>
    </nav>
  </div>
</div>

    </>
  );
};

export default Nav;
