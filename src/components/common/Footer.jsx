import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import img01 from '../../assets/images/logo.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Import the CSS file
import '../../assets/css/footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [footerData, setFooterData] = useState({
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
          setFooterData({
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

  return (
    <footer>
      {/* Navigation Section */}
      <section className="custom-container">
        <div className="row custom-row">
          <div className="col-md-4 custom-col2">
            {/* Logo */}
            <div>
              <img className="footer-logo" src={img01} alt="Logo" />
              <h2 >Dr Wafa Zaiem</h2>
            </div>
            {/* Specialty and Description */}
            <div>
         
              <p>Découvrez notre clinique dentaire, où professionnalisme et soin du détail vous garantissent une expérience sans égal</p>
            </div>
          </div>
          <div className="col-md-4 custom-col3">
            {/* Quick Links */}
            <div>
            <h3>Liens Rapides</h3>
    <ul className="quick-links">
      <li><a href="#"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '3px' }} />    À propos de nous </a></li>
      <li><a href="#"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '3px' }} /> Services </a></li>
      <li><a href="#"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '3px' }} />  Tarifs </a></li>
      <li><a href="#"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '3px' }} />  Dernières nouvelles </a></li>
      <li><a href="#"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '3px' }} />  Contacts </a></li>
      <li><a href="#"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '3px' }} />  Devis </a></li>
      <li><a href="#"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '3px' }} />  Réserver maintenant </a></li>
    </ul>
            </div>
          </div>
          <div className="col-md-4 custom-col">
            {/* Contact Information Updated with Dynamic Data */}
            <h3>Contact</h3>
            <address className="addr">
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {footerData.address}</p>
              <a href={`mailto:${footerData.email}`}>
                <FontAwesomeIcon icon={faEnvelope} /> {footerData.email}
              </a><br />
              <a href={`tel:${footerData.phone}`}>
                <FontAwesomeIcon icon={faPhone} /> {footerData.phone}
              </a>
            </address>
          </div>
        </div>
        {/* Social Media Icons */}
     
      </section>
      {/* Copyright Section */}
      <div className="custom-footer">
      <div className="grid_5">
          <ul className="social-list">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="https://api.whatsapp.com/send?phone=+21653446514" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
            <li><a href="https://www.instagram.com/dr_wafazaiem/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </div>
        <span id="copyright-year">&copy; {currentYear} Dr. Wafa. Tous droits réservés. </span>
      </div>
    </footer>
  );
};

export default Footer;
