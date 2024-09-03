import styles from './Tools.module.scss';

function Tools() {
  const toolsData = [
    { name: 'React' },
    { name: 'Angular' },
    { name: 'Vue' },
    { name: 'Node Js'},
    { name: 'Python'},
    { name: 'GSAP/Animation'},
    { name: 'Three Js'},
    { name: 'Blender'},
    { name: 'Figma' },
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
