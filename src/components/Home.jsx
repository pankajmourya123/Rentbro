import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

import apartment from '../assets/apartmenfeature.avif';
import payment from '../assets/featuredpayment.avif';
import buildings from '../assets/featurehouse.webp';
import '../style/Home.css'; // Import the CSS file
import HowItWorks from './HowItWork';
import Testimonials from './Testimonials';
import build from "../assets/pexels-pixabay-302769.jpg"

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center text-center">
            <Col>
              <h1 className="hero-title">Find Your Perfect Room Easily</h1>
              <p className="hero-subtitle">RentBro helps you find affordable, verified listings in minutes.</p>
              <Button variant="primary" className="me-2">Sign Up</Button>
              <Button variant="outline-primary">Log In</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <Container>
          <h2 className="text-center mb-4">Why Choose RentBro?</h2>
          <Row  >
            <Col md={4} className="mb-3" >
              <Card className="feature-card" style={{backgroundColor:'white' ,width:"400px"}}>
                <Card.Img variant="top" src={build} alt="Easy Search & Filters" />
                <Card.Body>
                  <Card.Title>Easy Search & Filters</Card.Title>
                  <Card.Text>Find rooms based on location, price, and amenities.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="feature-card">
                <Card.Img variant="top" src={payment} alt="Secure Payments" />
                <Card.Body>
                  <Card.Title>Secure Payments</Card.Title>
                  <Card.Text>Make payments securely using PayU, Razorpay, or credit cards.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="feature-card">
                <Card.Img variant="top" src={apartment} alt="Verified Listings" />
                <Card.Body>
                  <Card.Title>Verified Listings</Card.Title>
                  <Card.Text>All room listings are verified for authenticity with eKYC.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id ="pricing"  className="pricing-section bg-light">
        <Container>
          <h2 className="text-center mb-4">Choose Your Plan</h2>
          <Row>
            <Col md={4} className="mb-3">
              <Card className="pricing-card">
                <Card.Body>
                  <Card.Title>Basic Plan</Card.Title>
                  <Card.Text>Get access to basic room listings and filters.</Card.Text>
                  <Button variant="outline-primary">Select Basic</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card id="testimonials" className="pricing-card">
                <Card.Body>
                  <Card.Title>Premium Plan</Card.Title>
                  <Card.Text>Enjoy advanced search features and secure payments.</Card.Text>
                  <Button variant="outline-primary">Select Premium</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="pricing-card">
                <Card.Body>
                  <Card.Title>Enterprise Plan</Card.Title>
                  <Card.Text>For landlords and businesses managing multiple properties.</Card.Text>
                  <Button variant="outline-primary">Select Enterprise</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <HowItWorks/>
      < Testimonials/>
     
    </div>
  );
};

export default Home;
