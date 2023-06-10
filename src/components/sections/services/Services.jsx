import React, { useEffect, useState } from "react";

import "./Services.scss";

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
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="imageWrapper">
              <img src={tabs[activeTab].img} />
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
