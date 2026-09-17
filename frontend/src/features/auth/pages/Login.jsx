import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import "../auth.form.scss";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({email, password});
    navigate("/");
  };

  if (loading) {
    return (
      <main className="loading-screen">
        <div className="loader-spinner"></div>
        <h1>Securing your session...</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="auth-backdrop-orb"></div>
      <div className="form-container">
        <div className="auth-header">
          <span className="auth-brand">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            AI Resume Analyzer
          </span>
          <h1>Welcome Back</h1>
          <p>Sign in to access your interview plans</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button className="button primary-button">Sign In</button>
        </form>

        <p className="auth-footer-text">
          Don't have an account?
          <Link to="/register">Create one</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;

