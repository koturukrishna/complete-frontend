import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Logo & About Section */}
          <Col md={3}>
            <h5 className="text-warning">Foodie</h5>
            <p>Delicious meals delivered to your door, anytime, anywhere.</p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href=".." className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href=".." className="text-light text-decoration-none">
                  Menu
                </a>
              </li>
              <li>
                <a href=".." className="text-light text-decoration-none">
                  Offers
                </a>
              </li>
              <li>
                <a href=".." className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: support@foodie.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Street, City, Country</p>
          </Col>

          {/* Social Media Links */}
          <Col md={3}>
            <h5>Follow Us</h5>
            <a href=".." className="text-light me-3">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href=".." className="text-light me-3">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href=".." className="text-light me-3">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Foodie. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
