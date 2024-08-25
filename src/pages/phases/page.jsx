import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import styles from "./page.module.css";

const phases = [
  {
    title: "Meeting",
    content:
      "Meeting with clients is about collecting information. This step is important to understand the client’s business and industry. This is the perfect scenario to discuss the client’s requirements and needs too.",
    link: "/meeting-details",
  },
  {
    title: "Planning",
    content:
      "This phase involves creating a project plan, setting milestones, and determining the timeline. It's essential for establishing a clear direction and ensuring that all team members are aligned.",
    link: "/planning-details",
  },
  {
    title: "Design",
    content:
      "In this phase, the visual layout of the website is crafted. Designers work on wireframes and prototypes to create a user-friendly and aesthetically pleasing interface.",
    link: "/design-details",
  },
  {
    title: "Development",
    content:
      "The development phase involves writing the code to create the website. Developers turn the design into a functional website, integrating the necessary features and functionalities.",
    link: "/development-details",
  },
  {
    title: "Testing",
    content:
      "Before the website goes live, it undergoes rigorous testing to ensure that all functionalities work as intended. Bugs are fixed, and improvements are made during this phase.",
    link: "/testing-details",
  },
  {
    title: "Launch",
    content:
      "Once the website has passed all tests, it's time to launch. The website is made live for the public, and the client is briefed on its management.",
    link: "/launch-details",
  },
  {
    title: "Maintenance",
    content:
      "Post-launch, the website requires regular maintenance to ensure it runs smoothly. This phase includes updates, security checks, and performance optimization.",
    link: "/maintenance-details",
  },
  {
    title: "Review",
    content:
      "After the website has been live for some time, a review is conducted to assess its performance. Feedback is gathered, and further improvements are planned if necessary.",
    link: "/review-details",
  },
];

function Phases() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = (link) => {
    navigate(link); // Navigate to the link
  };

  return (
    <section className="containerv2">
      <h5 className="headingv2">8 Phases for smooth work-flow</h5>
      <div className={styles.phasesGrid}>
        {phases.map((phase, index) => (
          <div
            key={index}
            className={styles.phaseCard}
            onClick={() => handleCardClick(phase.link)} // Handle card click
          >
            <div className={styles.phaseNumber}>{`0${index + 1}`}</div>
            <h6>{phase.title}</h6>
            <p>{phase.content}</p>
            <a href={phase.link} className={styles.learnMore}>
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Phases;
