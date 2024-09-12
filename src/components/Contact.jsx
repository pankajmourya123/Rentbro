import React from "react";
import { motion } from "framer-motion";
import "../style/Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <motion.div 
        className="contact-form"
        initial={{ opacity: 0, y: "-100vh" }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Us</h2>
        
        <form>
          <input 
            type="text" 
            placeholder="Full Name" 
            className="contact-input"
          />
          
          <input 
            type="email" 
            placeholder="Email" 
            className="contact-input"
          />
          
          <textarea 
            placeholder="Your Message" 
            className="contact-textarea"
          />
          
          <motion.button 
            type="submit" 
            className="contact-button"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
