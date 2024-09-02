import Image from "next/image";
import styles from "./Works.module.scss";

function Works({ data, ref }: any) {
  return (
    <section className={styles.works} ref={ref}>
      <div className='container'>
        <h2 className='headingv2'>{data.label}</h2>
        <div className={styles.cardContainer}>
          {data?.item?.map((item: any) => (
            <div key={item.id} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item?.url}
                      alt='works'
                      width={635}
                      height={288}
                    />
                  </div>
                  <span>{data.view}</span>
                </div>
                <h5 className={styles.info}>{item?.tag}</h5>
              </div>
              <h6 className={styles.subHeading}>{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
