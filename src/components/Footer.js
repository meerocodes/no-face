import React from 'react';
import tiktok from '../assets/svgTiktok2.svg';
import IG from '../assets/svgIg.svg';

import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <Link to="https://www.tiktok.com/@_nofaceclub" target="_blank" className="social-icon">
          <img src={tiktok} alt="TikTok" />
        </Link>
        <Link to="https://www.instagram.com/_nofaceclub/" target="_blank" className="social-icon">
          <img src={IG} alt="Instagram" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
