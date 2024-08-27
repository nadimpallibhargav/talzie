import React, { useState } from "react";
import styles from "./page.module.scss";

function Services() {
  const [activeSection, setActiveSection] = useState("development");

  const sections = {
    strategy: [
      {
        title: "Product Discovery",
        description: "Research, User Interviews, and Market Analysis",
      },
      {
        title: "Product Architecture",
        description: "Creating the Blueprint of the Product",
      },
      {
        title: "Go-to-Market Strategy",
        description: "Launch Strategy, Positioning, and Marketing",
      },
      {
        title: "Product Roadmap",
        description: "Long-Term Vision and Feature Planning",
      },
    ],
    design: [
      {
        title: "Wireframing",
        description: "Low-Fidelity Mockups to Visualize the Layout",
      },
      {
        title: "Prototyping",
        description: "Interactive Models for User Testing",
      },
      {
        title: "Visual Design",
        description: "Branding, Color Schemes, and Typography",
      },
      {
        title: "UI /UX Design",
        description: "Optimizing User Interactions for Better Engagement",
      },
    ],
    development: [
      {
        title: "Web Development",
        description:
          "Frontend Development, Backend Development, and Integration",
      },
      {
        title: "Mobile Development",
        description: "iOS, Android, and Cross-Platform Solutions",
      },
      {
        title: "Unit Testing",
        description: "QA, Manual Testing, and Engineering",
      },
      {
        title: "Landing Page",
        description: "High-Converting Website for Lead Generation",
      },
    ],
  };

  return (
    <section className={styles.service}>
      <div className='container'>
        <h5 className='headingv2'>Services</h5>

        <div className={styles.buttonGroup}>
          <button
            className={activeSection === 'strategy' ? styles.activeButton : ''}
            onClick={() => setActiveSection('strategy')}
          >
            Strategy
          </button>
          <button
            className={activeSection === 'design' ? styles.activeButton : ''}
            onClick={() => setActiveSection('design')}
          >
            Design
          </button>
          <button
            className={
              activeSection === 'development' ? styles.activeButton : ''
            }
            onClick={() => setActiveSection('development')}
          >
            Development
          </button>
        </div>

        <div className={styles.content}>
          {sections[activeSection].map((item, index) => (
            <div className={styles.row} key={index}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <img src='/images/icons/arrow.svg' alt='arrow icon' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
