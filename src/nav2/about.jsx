import React from "react";
import "./About.css";
import {ArrowLeft} from "lucide-react";
const About = ({onBack}) => {
  return (
    <div className="about-container">
        
      <section className="intro-section">
      <button className="back-btn" onClick={onBack}>
            ⬅  Back to Home
        </button>
        <h1>SportA</h1>
        <p className="tagline">One Platform. All Sport.</p>
      </section>

      <section className="content-section">
        <h2>Our Mission</h2>
        <p>
          To simplify and supercharge sports management for players, academic institutions, and audiences — by offering an all-in-one digital solution that supports everything from registration to real-time match updates.
        </p>
      </section>

      <section className="content-section">
        <h2>How It Started</h2>
        <p>
          Idea of SportA was born during a college sports day, where we experienced firsthand the lack of a centralized platform for organizing sports events. From registration to live updates — nothing was streamlined. So we built the solution.
        </p>
      </section>

      <section className="features-section">
        <h2>What SportA Offers</h2>
        <ul>
          <li>📝 Player Registration</li>
          <li>📅 Match Schedules & Updates</li>
          <li>📢 Announcements</li>
          <li>📊 Scoreboards</li>
          <li>🏆 Final Results & Rankings</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Built by Students, for the Future</h2>
        <p>
          We’re a passionate team of final-year students who saw the problem and decided to solve it. SportA isn’t just a project — it's a real-world solution with long-term potential.
        </p>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          To grow SportA into a go-to platform used by schools, colleges, and clubs — across every sport, on any device, anywhere in the world.
        </p>
      </section>

      <section className="cta-section">
        <h2>Let’s Play. Smarter.</h2>
        <p>SportA is just getting started. Join us in building the future of sports management.</p>
      </section>
    </div>
  );
};

export default About;
