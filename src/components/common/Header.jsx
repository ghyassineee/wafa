import React,{useEffect,useState} from 'react';


import Nav from './Nav';
import img01 from '../../assets/images/page-1_slide01.jpg';
import img02 from '../../assets/images/page-1_slide02.jpg';
import img03 from '../../assets/images/page-1_slide03.jpg';
import logo from '../../assets/images/logo.png';

function Header() {
  const [headerData, setHeaderData] = useState({
    address: '',
    email: '',
    phone: '',
    logo: ''
  });
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
    return(
    
    
    <header>
        
        <div className="camera_container">
        <div id="camera" class="camera_wrap">
        <div data-src={img01}></div>
        <div data-src={img02}></div>
        <div data-src={img03}></div>
      </div>      
      
        <div className="camera-text">
          <span >Beauty starts with a smile and veneers </span>
          <br />
          <button className="btn1">Rendez vous</button>

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
    </header>);
}

export default Header;
