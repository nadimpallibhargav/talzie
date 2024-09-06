import Image from "next/image";
import Link from "next/link";
import styles from "./Works.module.scss";

function Works({ data, ref }: any) {
  return (
    <section className={styles.works} ref={ref}>
      <div className="container">
        <h2 className="headingv2">{data.label}</h2>
        <div className={styles.cardContainer}>
          {data?.item?.map((item: any) => {
            const cardContent = (
              <>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item?.url}
                        alt={item.name}
                        width={635}
                        height={288}
                      />
                    </div>
                    <span>{data.view}</span>
                  </div>
                  <h5 className={styles.info}>{item?.tag}</h5>
                </div>
                <p style={{ marginTop: 10, fontSize: 18 }}>{item.name}</p>
              </>
            );

            return (
              <div key={item.id} className={styles.cardWrapper}>
                {data.nav ? (
                  <Link
                    href={`/blogs?id=${item.id}`}
                    className={styles.subHeading}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Works;
