import React from "react";
import styles from "./page.module.css";

function Work({ data }) {
  return (
    <section className="containerv2">
      <h5 className="headingv2">{data.label}</h5>
      <div className={styles.cardContainer}>
        {data?.item?.map((item) => (
          <div key={item.id}>
            <div className={styles.card}>
              <p>{data.view}</p>
              <div className={styles.info}>
                <h5>Design | Development | Branding</h5>
              </div>
            </div>
            <label className={styles.subHeading}>{item.name}</label>
            <p className={styles.descripiton}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
