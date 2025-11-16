import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      {/* ================= HERO ================= */}
      <section className="hero">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-logo">PeerSkill</div>
          <ul className="nav-menu">
            <li>Home</li>
            <li>Community</li>
            <li>Jobs</li>
            <li>Companies</li>
            <li>About Us</li>
            <li>For Employers</li>
          </ul>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>Your work people are here</h1>
          <p>
            By continuing, you agree to our <span className="link">Terms of Use</span> and{" "}
            <span className="link">Privacy Policy</span>.
          </p>

          <div className="login-box">
            <button className="google-btn">Continue with Google</button>
            <button className="apple-btn">Continue with Apple</button>
            <div className="or">or</div>
            <input type="email" placeholder="Enter email" className="email-input" />
            <button className="email-btn">Continue with email</button>
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
          We're serving up trusted insights and anonymous conversations, so you'll
          have the goods you need to succeed.
        </p>
      </footer>
    </div>
  );
}
