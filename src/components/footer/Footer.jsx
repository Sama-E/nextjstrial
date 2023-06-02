import React from 'react';
import styles from './page.module.css';
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 NextJSTrial. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/facebook.png" width={15} height={15} className={styles.icon} alt="" />
        <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="" />
        <Image src="/youtube.png" width={15} height={15} className={styles.icon} alt="" />
        <Image src="/instagram.png" width={15} height={15} className={styles.icon} alt="" />
      </div>
    </div>
  )
}

export default Footer;