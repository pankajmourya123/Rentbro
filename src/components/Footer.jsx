import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import "../style/Footer.css"
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row className="text-center text-md-left">
          {/* Contact Info */}
          <Col md={4} className="mb-3">
            <h5>Contact Info</h5>
            <p>Email: support@rentbro.com</p>
            <p>Phone: +1 123 456 7890</p>
            <p>Address: 123 RentBro St, New York, NY</p>
          </Col>

          {/* Social Media Links */}
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="https://www.facebook.com" className="text-white me-3">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.twitter.com" className="text-white me-3">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com" className="text-white me-3">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com" className="text-white me-3">
                <FaLinkedin size={20} />
              </a>
            </div>
          </Col>

          {/* Legal Links */}
          <Col md={4} className="mb-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/terms" className="text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        {/* Copyright Info */}
        <Row className="mt-4 text-center">
          <Col>
            <p className="mb-0">&copy; 2024 RentBro. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
