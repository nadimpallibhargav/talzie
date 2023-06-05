import React, { useEffect, useState } from 'react';
import "./styles.scss";

const TabComponent = ({ tabs, autoCycleInterval }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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

  const handleTabClick = (index) => {
    if (index === activeTab) {
      setIsPlaying(!isPlaying); // Toggle auto-cycling when clicking on the active tab
    } else {
      setIsPlaying(true);
      setActiveTab(index);
      setProgress(index);
      setInitialProgress(index);
    }
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
    <div className="heading">
          <h2>Clients</h2>
          <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="wrapper">
    {/* <div className="tab-content">{tabs[activeTab].content}</div> */}
    <div className="tabs-wrapper">
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? 'active' : ''}
          >
            {/* <img
              src={
                index === activeTab
                  ? '/images/icon-check.svg'
                  : '/images/icon-check.svg'
              }
              width={24}
              height={24}
            /> */}
            {tab.title}
            {index === activeTab && (
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${
                      progress === activeTab && initialProgress === activeTab
                        ? ((progress - initialProgress) / tabs.length) * 100
                        : 0
                    }%`,
                    animationPlayState:
                      progress === activeTab && isPlaying ? 'running' : 'paused',
                  }}
                ></div>
              </div>
            )}
          </li>
        ))}
      </ul>
  
    </div>
    <div>Image Goes Here</div>
    </div>
    </div>
  );
};

export default TabComponent;
