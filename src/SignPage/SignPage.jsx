import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./SignPage.css";

export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    const result = login(email, password);
    if (result.success) {
      const role = result.user.role;
      if (role === "admin") navigate("/admin");
      else if (role === "teacher") navigate("/teacher");
      else navigate("/classes");
    } else {
      setError(result.message);
    }
  }


  return (
    <div className="bg">
      <div className="sign-card">
        {/* Sign In Form */}
        <div className="sign-form-side">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <p className="sign-subtitle">Login with your school account</p>
            {error && <p className="sign-error">{error}</p>}
            <input
              type="email"
              placeholder="Enter E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
            <div className="sign-demo">
              <strong>Demo Accounts:</strong><br />
              Admin: admin@srcc.edu / admin123<br />
              Teacher: maria@srcc.edu / teacher123<br />
              Student: gaddi@srcc.edu / gaddi123
            </div>
          </form>
        </div>

        
        <div className="sign-panel-side">
          <h1>Welcome!</h1>
          <p>Sign in with your school credentials to access your dashboard</p>
        </div>
      </div>
    </div>
  );
}



