import React from "react";
import styles from "./additionalbutton.module.css";

const AdditionalServicesButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.additionalservicesbutton}>
        Additional Services
      </button>
    </div>
  );
};

export default AdditionalServicesButton;
