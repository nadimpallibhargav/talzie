"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

function Navbar({ sections }: any) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className='container'>
          <div className={styles.navWrapper}>
            <div className={styles.wrap}>
              <Image
                src='/talzie-logo-black.webp'
                alt='logo'
                onClick={toggleDrawer}
                className={styles.logo}
                width={50}
                height={50}
                priority
              />
            </div>
          </div>
        </div>
        {isDrawerOpen && (
          <div className={styles.drawer}>
            <div className={styles.header}>
              <div className={styles.logoContainer} onClick={toggleDrawer}>
                <div className={styles.talzieBanner}>
                  <Image
                    src='/talzie-logo-black.webp'
                    alt='logo'
                    width={40}
                    height={40}
                    priority
                  />
                </div>
                <h5>Talzie</h5>
              </div>
              <Image
                src='/close.svg'
                alt='close'
                width={28}
                height={28}
                onClick={toggleDrawer}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {pathname === '/' && (
              <div className={styles.body}>
                <h5 onClick={() => scrollToSection(sections.worksRef)}>
                  Our Work
                </h5>
                <h5 onClick={() => scrollToSection(sections.servicesRef)}>
                  Our Services
                </h5>
                <h5 onClick={() => scrollToSection(sections.phasesRef)}>
                  Our Process
                </h5>
                <h5 onClick={() => scrollToSection(sections.contactRef)}>
                  Contact Us
                </h5>
              </div>
            )}

            <div className={styles.footer}>
              <div className={styles.buttonwrap}>
                <p>
                  At Talzie web solutions, we don&rsquo;t just design and build
                  websites. <br /> — we create digital experiences that
                  captivate, convert, and inspire. Whether you&rsquo;re a
                  startup looking to make a bold entrance or an established
                  brand aiming to redefine your online presence, our team of
                  creative experts is here to turn your ideas into reality.
                </p>
                <h5>FOLLOW US ON : LINKEDIN | FACEBOOK | INSTAGRAM</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
