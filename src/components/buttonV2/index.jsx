import React from "react";
import styles from "./index.module.css";

function Buttonv2({ label }) {
  return <button className={styles.buttonContainer}>{label}</button>;
}

export default Buttonv2;
