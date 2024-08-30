import styles from './Tools.module.scss';

function Tools() {
  const toolsData = [
    { name: 'Figma' },
    { name: 'Adobe' },
    { name: 'Sketch' },
    { name: 'InVision' },
    { name: 'Framer' },
  ];

  return (
    <div className='containerv2'>
      <div className='container'>
        <div className={styles.wrapper}>
          <p className={styles.description}>
            The Talzie works with the latest generation of tools and
            technologies for optimal durability.
          </p>
          <div className={styles.toolsWrapper}>
            <div className={styles.toolsContainer}>
              {toolsData.concat(toolsData).map((tool, index) => (
                <h5 key={index} className={styles.tools}>
                  {tool.name}
                </h5>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
