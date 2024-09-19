import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className='container'>
        <div
          className={`${styles.linksWrapper} text-center max-w-[768px] mx-auto flex items-center justify-between flex-wrap gap-5 p-[20px]`}
        >
          <div className='flex items-center justify-center gap-10'>
            <Link
              href='https://www.linkedin.com/company/talzie/'
              target='_blank'
            >
              <Image
                src='/linkedin.svg'
                width={25}
                height={25}
                alt='linkedin'
              />
            </Link>
            <Link
              href='https://www.instagram.com/talzie.info25/'
              target='_blank'
            >
              <Image
                src='/instagram.svg'
                width={25}
                height={25}
                alt='instagram'
              />
            </Link>
            <Link
              href='https://www.facebook.com/people/Talzie-Web-Solutions/61565415118255/'
              target='_blank'
            >
              <Image
                src='/facebook.svg'
                width={25}
                height={25}
                alt='facebook'
              />
            </Link>
          </div>
          <span className='text-6xl font-bold'>Talzie.in</span>
          <span className='text-2xl'>&copy; Talzie. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
