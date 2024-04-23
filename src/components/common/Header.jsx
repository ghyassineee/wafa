import React from 'react';


import Nav from './Nav';
import img01 from '../../assets/images/page-1_slide01.jpg';
import img02 from '../../assets/images/page-1_slide02.jpg';
import img03 from '../../assets/images/page-1_slide03.jpg';
import logo from '../../assets/images/logo.png';

function Header() {
    return(
    
    
    <header>
        
        <div className="camera_container">
        <div id="camera" class="camera_wrap">
        <div data-src={img01}></div>
        <div data-src={img02}></div>
        <div data-src={img03}></div>
      </div>      
      
        <div className="camera-text">
          <span className="camera-text_lg">Dr Wafa Zaiem</span><br />
          <span >Diamonds are forever -  </span>SKYCE IS JUST FOR FUN
        </div>
      </div>
      <div className="main-brand">
        <div className="container">
          <div className="brand">
            <h1 className="brand_name">
              <a href="/">
                <img className="logo" src={logo} alt="" />
              </a>
            </h1>
          </div>
        </div>
      </div>
      <Nav/>
    </header>);
}

export default Header;
