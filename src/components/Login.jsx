import React from "react";
import { motion } from "framer-motion";
import "../style/Login.css";
const Login = () => {
  return (
    <section className="login">
      <motion.div 
        className="login-form"
        initial={{ opacity: 0, y: "-100vh" }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Welcome Back</h2>
        
        <form>
          <input 
            type="email" 
            placeholder="Email" 
            className="login-input"
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="login-input"
          />

          <motion.button 
            type="submit" 
            className="login-button"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </motion.button>
        </form>

        <a href="/forgetpassword" className="login-link">
          Forgot Password?
        </a>
        
        <p className="login-text">
          New User? <a href="/signup" className="signup-link">Sign Up</a>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
