import React from "react";
import styles from "./doitnow.module.css";

const MainComponent = () => {
  return (
    <div className={styles.maincontent}>
      <div className={styles.text}>
        <h1 className={styles.title}>Do It Now</h1>
        <p className={styles.description}>
          At do it now events, we specialize in turning your event dreams into
          unforgettable realities. Whether you're planning a corporate gala, a
          dream wedding, or a special celebration,our dedicated team is here to
          ensure every detail is perfect.
        </p>
      </div>
      <div className={styles.Imagesection}>
        <img
          className={styles.image}
          src="https://s3-alpha-sig.figma.com/img/1782/98fb/2e6e13b80eb6539d7b93a152a24d79ef?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvjIAdkVZjt3iow7~aO35f6Ab0GRX2su3CNu7OwSifQp3FazLBK~gCZY92lABYb1DJlYqwFW9Rid2pYj0SnEisJ72dZDkAJCmVABXOJRy9eCG38zBxeBzHghRpxlwZDhUz~oRrIy5dSQ~bVOvvGrdAzEq-lL8eCjs79ECHzHY7sHxkUzzwQcY4EWR6ZON4Tf1Hi5Z1uZNWmP3EvEWYOgBHFE1Ztu9qDc8zyS-P2uj007CDYDfkoEduIGmA1ltncphWnNWYTQEIY5-ppnbKYXh4-tiqjEBwQY00pWiONG6ZrK81-zsBjX3qMXdUgTRefvQszLg4DSZ3vQYcRXAV2sw__"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainComponent;
