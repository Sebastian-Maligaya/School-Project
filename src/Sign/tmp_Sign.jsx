import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Homepage/Homepage.css"; // navbar
import "./Sign.css";

export default function Sign() {
  
  const [isActive, setIsActive] = useState(false); // state for toggling forms

  return (
    <div className="bg">
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      
      
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className='bx bxl-google'></i></a>
            <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="icons"><i className='bx bxl-github'></i></a>
            <a href="#" className="icons"><i className='bx bxl-linkedin'></i></a>
          </div>
          <span>Register with E-mail</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className='bx bxl-google'></i></a>
            <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="icons"><i className='bx bxl-github'></i></a>
            <a href="#" className="icons"><i className='bx bxl-linkedin'></i></a>
          </div>
          <span>Login With Email & Password</span>
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <a href="#">Forget Password?</a>
          <button type="button">Sign In</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login <br/>with your personal info</p>
            <button 
              className="hidden" 
              onClick={() => setIsActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <button 
              className="hidden" 
              onClick={() => setIsActive(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>    
    
  );
};
  

