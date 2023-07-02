import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} TeamTasker. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
