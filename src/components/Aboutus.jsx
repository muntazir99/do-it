import styles from "./aboutus.module.css";
export default function Aboutus() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About us</h1>
      <p className={styles.description}>
        Welcome to do it now events, a dynamic event management firm founded in
        2024 and based in the vibrant cultural hub of [City/Town], UK. We
        specialize in curating bespoke events that leave a lasting impression,
        whether you're planning a corporate function, a luxurious wedding, or a
        memorable private party.
      </p>
    </div>
  );
}
