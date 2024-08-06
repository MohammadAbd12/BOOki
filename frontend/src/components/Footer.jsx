// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container>
        <div className="text-center">
          &copy; {new Date().getFullYear()} BOOki. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
