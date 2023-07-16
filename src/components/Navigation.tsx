'use client';
import React from 'react'
import styles from '../scss/Navigation.module.scss'
import { useScrollTo } from '@/hooks/use-scroll';
import HamburgerIcon from './Svg/HamburgerIcon';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const Navigation = () => {

  return (
    <nav className='bg-ui-darkgray relative z-50 sticky top-0'>
        <div className='container mx-auto px-8 xl:px-32 md:px-20 py-6'>
            <div className="flex justify-between">
                <p className={styles.nav__logo}>
                    Michał Wolny
                </p>
                <div className={styles.nav__menu}>
                    <ul className="flex gap-6 text-txt-gray">
                        <li className={styles.nav__link} onClick={() => useScrollTo("home")}>
                            Home
                        </li>
                        <li className={styles.nav__link} onClick={() => useScrollTo("about")}>
                            About
                        </li>
                        <li className={styles.nav__link} onClick={() => useScrollTo("exp")}>
                            Work experience
                        </li>
                        <li className={styles.nav__link} onClick={() => useScrollTo("projects")}>
                            Personal projects
                        </li>
                        <li className={styles.nav__link} onClick={() => useScrollTo("contact")}>
                            Contact
                        </li>
                    </ul>
                </div>
                <div className={styles['nav__menu-mobile']}>
                    <HamburgerIcon/>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navigation