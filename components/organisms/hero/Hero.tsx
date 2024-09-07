import styles from './Hero.module.scss';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContainer}>
          <h1 className='max-w-[991px] mx-auto'>
            Designing Tomorrow&rsquo;s Websites, Today
          </h1>
          <div className={styles.heroFooter}>
            <h2 className={styles.info}>
              Design Visually. <br />
              Create Efficiently.
            </h2>
            <p className={styles.description}>
              At Talzie web solutions, we don&rsquo;t just design and build
              websites. <br />— we create digital experiences that captivate,
              convert, and inspire. Whether you&rsquo;re a startup looking to
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
