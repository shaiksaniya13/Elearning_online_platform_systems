import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1>eLearn</h1>
        <div className="nav-buttons">
          <button>Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
      <div className="hero-text">
        <h2>Learn Anytime, Anywhere</h2>
        <p>Empowering students through flexible and engaging online courses.</p>
      </div>
    </header>
  );
}

export default Header;
