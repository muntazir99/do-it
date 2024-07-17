import React from "react";
import styles from "./moreinfo.module.css";
export default function Moreinfo() {
  return (
    <div className={styles.container}>
      <button
        className={styles.moreinfobutton}
        onClick={() => console.log("Button was clicked")}
      >
        more info
      </button>
    </div>
  );
}
