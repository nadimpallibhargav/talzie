import styles from './Hero.module.scss';
import ParticleAnimation from '../animations/ParticalAnimation';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContainer}>
          <h1 className='max-w-[991px] mx-auto'>Designing Tomorrow&lsquo;s Websites, Today</h1>
          <div style={{ width: '100%', height: '50vh', position: 'relative' }}>
            <ParticleAnimation />
          </div>
          <div className={styles.heroFooter}>
            <h6 className={styles.info}>
              Design Visually. <br />
              Create Efficiently.
            </h6>
            <p className={styles.description}>
              At Talzie web solutions, we don&lsquo;t just design and build
              websites. <br />— we create digital experiences that captivate,
              convert, and inspire. Whether you&lsquo;re a startup looking to
              make a bold entrance or an established brand aiming to redefine
              your online presence, our team of creative experts is here to turn
              your ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
