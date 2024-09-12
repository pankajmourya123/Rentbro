import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';



import Home from './components/Home.jsx';

import Footer from './components/Footer.jsx';
import SignUp from './components/Signup.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Contact from './components/Contact.jsx';

// Dummy components for the pages

const Features = () => <div>Features Page</div>;
const Pricing = () => <div>Pricing Page</div>;
const Testimonials = () => <div>Testimonials Page</div>;




function App() {
  return (
    <Router>
      <Header />
   
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
