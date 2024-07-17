import React from "react";
import styles from "./header.module.css";
import logo from "../assets/logo.jpg";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
</style>;
const Header = () => {
  return (
    <div className={styles.headercontainer}>
      <img src={logo} alt="" className={styles.logo}></img>
      <ul className={styles.navlinkul}>
        <li classname={styles.navlinkli}>
          <a className={styles.navlinkl} href="#home">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navlinka} href="#services">
            Services
          </a>
        </li>
        <li>
          <a className={styles.navlinka} href="#contact">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
