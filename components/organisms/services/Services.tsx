'use client';
import React, { useState } from 'react';
import styles from './Services.module.scss';

function Services({ ref }:any) {
  const [activeSection, setActiveSection] = useState('development');

  const sections: any = {
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
    ai: [
      {
        title: "AI Consulting",
        description:
          "Strategy, Roadmap, and Implementation Guidance for AI Solutions",
      },
      {
        title: "Custom AI Solutions",
        description:
          "Tailored Machine Learning, NLP, and Computer Vision Applications",
      },
      {
        title: "AI Integration",
        description: "Integrate AI into Existing Products and Workflows",
      },
      {
        title: "Automation & Chatbots",
        description:
          "Automate Processes and Enhance Customer Experience with AI",
      },
    ],
    "3d": [
      {
        title: "3D Product Visualization",
        description:
          "Showcase your products with interactive and photorealistic 3D models for web, mobile, and AR/VR platforms.",
      },
      {
        title: "3D Animation & Motion Graphics",
        description:
          "Engaging 3D animations, explainer videos, and motion graphics for marketing, education, and presentations.",
      },
      {
        title: "3D Game Development",
        description:
          "Full-cycle 3D game development for PC, mobile, and web using Unity, Unreal Engine, and WebGL.",
      },
      {
        title: "3D Architectural Visualization",
        description:
          "Realistic 3D renders and walkthroughs for real estate, architecture, and interior design projects.",
      },
      {
        title: "3D Asset Creation",
        description:
          "Custom 3D assets for games, simulations, AR/VR, and digital twins.",
      },
      {
        title: "Immersive Experiences",
        description:
          "Virtual reality (VR), augmented reality (AR), and mixed reality (MR) solutions for training, marketing, and entertainment.",
      },
      {
        title: "3D Printing & Prototyping",
        description:
          "3D modeling and preparation for rapid prototyping and 3D printing.",
      },
      {
        title: "3D Web Solutions",
        description:
          "Interactive 3D experiences, product configurators, and immersive web solutions using WebGL and Three.js.",
      },
    ],
  };

  return (
    <section className={styles.service} ref={ref}>
      <div className="container">
        <h5 className="headingv2">Services</h5>

        <div className={styles.buttonGroup}>
          <button
            className={activeSection === "design" ? styles.activeButton : ""}
            onClick={() => setActiveSection("design")}
          >
            Design
          </button>
          <button
            className={
              activeSection === "development" ? styles.activeButton : ""
            }
            onClick={() => setActiveSection("development")}
          >
            Development
          </button>
          <button
            className={activeSection === "ai" ? styles.activeButton : ""}
            onClick={() => setActiveSection("ai")}
          >
            AI
          </button>
          <button
            className={activeSection === "3d" ? styles.activeButton : ""}
            onClick={() => setActiveSection("3d")}
          >
            3D Development
          </button>
          <button
            className={activeSection === "strategy" ? styles.activeButton : ""}
            onClick={() => setActiveSection("strategy")}
          >
            Strategy
          </button>
        </div>

        <div className={styles.content}>
          {sections[activeSection].map((item: any, index: any) => (
            <div className={styles.row} key={index}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              {/* <Image src='/arrow.svg' alt='arrow icon' width={14} height={13} /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
