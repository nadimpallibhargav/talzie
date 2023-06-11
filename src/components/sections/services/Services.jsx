import React, { useEffect, useState } from "react";

import "./Services.scss";
import Lottie from "lottie-react";

const TabComponent = ({ tabs, autoCycleInterval }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying] = useState(true);
  const [initialProgress, setInitialProgress] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setProgress((prevProgress) => (prevProgress + 1) % (tabs.length + 1));
      }
    }, autoCycleInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [tabs.length, autoCycleInterval, isPlaying]);

  useEffect(() => {
    setActiveTab(progress === tabs.length ? 0 : progress);

    if (isFirstRender) {
      setIsFirstRender(false);
      setInitialProgress(progress);
    }
  }, [progress, tabs.length, isFirstRender]);

  return (
    <section className="services">
      <div className="container">
        <div className="servicesContent">
          <div className="servicesImageContent">
            <div className="heading">
              <h2>What we do.</h2>
              <p style={{maxWidth:450}}>Transforming ideas into captivating websites through creative web development and design.</p>
            </div>
            <div className="imageWrapper">
              {/* <Lottie
            animationData={tabs[activeTab].img}
            loop={true}
            style={{ height: 50, width: 50 }}
          /> */}
          <div className="lotti-wrapper">
          {tabs[activeTab].img}
          </div>
            </div>
          </div>
          <div className="servicesTabsWrapper">
            <ul className="tab-list">
              {tabs.map((tab, index) => (
                <li key={index} className={index === activeTab ? "active" : ""}>
                  {tab.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabComponent;
