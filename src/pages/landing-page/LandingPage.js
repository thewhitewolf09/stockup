import React from "react";
import "./LandingPage.scss";
import teamTaskSvg from "..//../assets/svg/team checklist-rafiki.svg";
import CollaborationImage from "..//../assets/svg/Design team-pana.svg";
import AssignmentImage from "..//../assets/svg/personal goals checklist-amico.svg";
import trackingImage from "..//../assets/svg/QA engineers-bro.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <span>TeamTasker</span>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>

            <Link to={"/sign-up"}>
              <button className="btn btn-primary">Sign Up</button>
            </Link>

            <Link to={"/log-in"}>
              <button className="btn btn-secondary">Login</button>
            </Link>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Efficient Team Task Management</h2>
          <p>TeamTasker helps you streamline your team's tasks and projects.</p>
          <div className="cta-buttons">
            <Link to={"/sign-up"}>
              <button className="btn btn-primary">Sign Up</button>
            </Link>
            <Link to={"/log-in"}>
              <button className="btn btn-secondary">Login</button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={teamTaskSvg} alt="Hero" />
        </div>
      </section>

      <section className="features-section">
        <h3>Key Features</h3>
        <div className="feature-card-container">
          <div className="feature-card">
            <div className="feature-icon">
              <img src={AssignmentImage} alt="Feature Icon" />
            </div>
            <div className="feature-details">
              <h4>Task Creation and Assignment</h4>
              <p>
                Create tasks, assign them to team members, and set due dates.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={CollaborationImage} alt="Feature Icon" />
            </div>
            <div className="feature-details">
              <h4>Real-time Collaboration</h4>
              <p>
                Communicate and collaborate within your team for efficient task
                management.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={trackingImage} alt="Feature Icon" />
            </div>
            <div className="feature-details">
              <h4>Task Tracking and Notifications</h4>
              <p>
                Track task progress and receive notifications for important
                updates and deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 TeamTasker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
