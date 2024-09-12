import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import test1 from '../assets/test1.jpeg';
import test2 from '../assets/testmonial2.jpg';
import test3 from '../assets/test4.avif';
import "../style/Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <Container>
        <h2 className="text-center section-title">What Our Customers Say</h2>
        <Carousel interval={5000} fade={true} controls={false} indicators={false}>
          <Carousel.Item>
            <div className="testimonial-content">
              <img
                className="testimonial-image"
                src={test1}
                alt="John Doe"
              />
              <Carousel.Caption className="testimonial-caption">
                <p style={{color:'black'}}>
                  "RentBro made it so easy for me to find a place in a new city.
                  Highly recommended!"
                </p>
                <h5 className="customer-name">- John Doe</h5>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item id="testimonials" >
            <div className="testimonial-content">
              <img
                className="testimonial-image"
                src={test2}
                 alt="Jane Smith"
              />
              <Carousel.Caption style={{color:'black'}} className="testimonial-caption">
                <p>
                  "A seamless experience from searching for a room to making
                  payments. Excellent support!"
                </p>
                <h5 className="customer-name">- Jane Smith</h5>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="testimonial-content">
              <img
                className="testimonial-image"
                src={test3}
                alt="Michael Lee"
              />
              <Carousel.Caption style={{color:'black'}} className="testimonial-caption">
                <p>
                  "The best platform for renting rooms. Easy to use and very
                  reliable."
                </p>
                <h5 className="customer-name">- Michael Lee</h5>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
