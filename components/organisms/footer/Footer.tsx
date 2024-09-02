import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className='container'>
        <div className={`${styles.linksWrapper} text-center max-w-[768px] mx-auto flex items-center justify-between flex-wrap gap-5 pt-[50px] pb-[200px]`}>
          <h5 className='text-2xl font-bold'>
            LINKEDIN | FACEBOOK | INSTAGRAM
          </h5>
          <span className='text-4xl font-bold'>Talzie.in</span>
          <span className='text-2xl'>
            &copy; Talzie. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
