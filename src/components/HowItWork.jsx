import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaSearch, FaCheck, FaHome } from 'react-icons/fa'; //
import "../style/HowItWorks.css"

const HowItWorks = () => {
  return (
    <section className="it-works-section py-5">
      <Container>
        <h2 className="text-center mb-4">How It Works</h2>
        <Row className="text-center">
          {/* Step 1: Search */}
          <Col md={4} className="mb-3">
            <Card className="step-card">
              <Card.Body>
                <FaSearch size={40} className="mb-3 text-primary" />
                <Card.Title>Step 1: Search</Card.Title>
                <Card.Text>
                  Use our search tool to find rooms based on location, price, and amenities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Step 2: Select */}
          <Col md={4} className="mb-3">
            <Card className="step-card">
              <Card.Body>
                <FaCheck size={40} className="mb-3 text-primary" />
                <Card.Title>Step 2: Select</Card.Title>
                <Card.Text>
                  Choose from verified listings that meet your needs and preferences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Step 3: Rent Now */}
          <Col md={4} className="mb-3">
            <Card className="step-card">
              <Card.Body>
                <FaHome size={40} className="mb-3 text-primary" />
                <Card.Title>Step 3: Rent Now</Card.Title>
                <Card.Text>
                  Secure your room by making the payment and finalizing the rental agreement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
