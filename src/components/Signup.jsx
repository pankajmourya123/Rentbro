import React from "react";
import { motion } from "framer-motion";
import "../style/Signup.css";

const Signup = () => {
  return (
    <section className="signup">
      <motion.div 
        className="signup-form"
        initial={{ opacity: 0, y: "-100vh" }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Create an Account</h2>
        
        <form>
          <input 
            type="text" 
            placeholder="Full Name" 
            className="signup-input"
          />
          
          <input 
            type="email" 
            placeholder="Email" 
            className="signup-input"
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="signup-input"
          />
          
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="signup-input"
          />

          <motion.button 
            type="submit" 
            className="signup-button"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>

        <p className="signup-text">
          Already have an account? <a href="/login" className="login-link">Log In</a>
        </p>
      </motion.div>
    </section>
  );
};

export default Signup;
