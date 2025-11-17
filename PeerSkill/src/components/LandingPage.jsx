import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      {/* ================= HERO ================= */}
      <section className="hero">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-left">
            <div className="nav-logo">PeerSkill</div>

            <ul className="nav-menu">
              <li>Home</li>
              <li>Community</li>
              <li>Jobs</li>
              <li>Companies</li>
              <li>About Us</li>
              <li>For Employers</li>
            </ul>
          </div>

          <button className="login-btn nav-login-right">Login</button>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>Your work people are here</h1>
          <p>
            By continuing, you agree to our{" "}
            <span className="link">Terms of Use</span> and{" "}
            <span className="link">Privacy Policy</span>.
          </p>

          <div className="login-box">
            {/* Google Button */}
            <button className="google-btn">
              <span className="btn-icon">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 10.2v3.5h5.1c-.2 1.1-.8 2.1-1.7 2.8l2.7 2.1c1.6-1.5 2.6-3.8 2.6-6.5 0-.6 0-1-.1-1.4H12z"
                  />
                  <path
                    fill="#34A853"
                    d="M6.5 14.3c-.3-.9-.5-1.8-.5-2.8s.2-1.9.5-2.8L3.8 6.6C3 8.2 2.5 10 2.5 11.8s.5 3.6 1.3 5.2l2.7-2.7z"
                  />
                  <path
                    fill="#4285F4"
                    d="M12 5.5c1.4 0 2.7.5 3.7 1.4l2.8-2.8C16.7 2.7 14.5 2 12 2 8.4 2 5.2 4 3.8 6.6l2.7 2.1c.6-1.9 2.4-3.2 4.5-3.2z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12 21.5c2.5 0 4.7-.8 6.3-2.2l-2.7-2.1c-.8.7-2 1.2-3.6 1.2-2.1 0-3.9-1.3-4.5-3.2l-2.7 2.1C5.2 20 8.4 21.5 12 21.5z"
                  />
                </svg>
              </span>
              Continue with Google
            </button>

            {/* Apple Button */}
            <button className="apple-btn">
              <span className="btn-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M16.7 13.2c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-1.9-1.5-.2-2.9.9-3.7.9-.8 0-2-.8-3.3-.7-1.7.1-3.2 1-4 2.5-1.7 3-.4 7.4 1.2 9.8.8 1.1 1.8 2.4 3.1 2.4 1.2 0 1.7-.8 3.3-.8 1.5 0 2 .8 3.3.8 1.3 0 2.2-1.1 3-2.2.9-1.3 1.2-2.5 1.2-2.6-.1-.1-2.3-.9-2.3-3.4z" />
                  <path d="M14.9 5.3c.7-.9 1.2-2.2 1-3.4-1 .1-2.3.7-3 1.6-.6.7-1.1 2-1 3.2 1.1.1 2.3-.6 3-1.4z" />
                </svg>
              </span>
              Continue with Apple
            </button>

            <div className="or">or</div>

            <input
              type="email"
              placeholder="Enter email"
              className="email-input"
            />
            <button className="email-btn">Continue with email</button>
          </div>

          <div className="register-text">
            New to PeerSkill? <a href="#">Register Here</a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section">
        <h2>Why PeerSkill?</h2>
        <div className="features-row">
          <div className="feature-card">
            <h3>Real Proof of Skills</h3>
            <p>Upload videos or files that actually show your real abilities.</p>
          </div>

          <div className="feature-card">
            <h3>Peer Validation</h3>
            <p>Peers rate your skills and provide helpful feedback.</p>
          </div>

          <div className="feature-card">
            <h3>Skill Passport</h3>
            <p>Build a verified skill identity trusted by employers.</p>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="how-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step-box">
            <span className="step-number">1</span>
            <h4>Create an Account</h4>
            <p>Sign up quickly using email or Google.</p>
          </div>

          <div className="step-box">
            <span className="step-number">2</span>
            <h4>Upload Your Skill</h4>
            <p>Show what you can do using videos or files.</p>
          </div>

          <div className="step-box">
            <span className="step-number">3</span>
            <h4>Get Peer Validation</h4>
            <p>Peers rate your skill and give feedback.</p>
          </div>

          <div className="step-box">
            <span className="step-number">4</span>
            <h4>Earn Badges & Reputation</h4>
            <p>Your Skill Passport gets updated automatically.</p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">
        <h2>Growing with the Community</h2>
        <div className="stats-cards">
          <div className="stat-card">
            <h3>12,000+</h3>
            <p>Skills Uploaded</p>
          </div>

          <div className="stat-card">
            <h3>8,500+</h3>
            <p>Verified Skills</p>
          </div>

          <div className="stat-card">
            <h3>3,200+</h3>
            <p>Active Peer Validators</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <h2>Get ahead with PeerSkill</h2>
        <p>
          We're serving up trusted insights and anonymous conversations, so
          you'll have the goods you need to succeed.
        </p>
      </footer>
    </div>
  );
}
