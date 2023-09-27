import Image from "next/image";
import styles from "./page.module.css";
import icon_eth from "../../../../public/icon-ethereum.svg";
import img_profile from "../../../../public/image-avatar.png";
export default function Nft_card() {
  return (
    <main className={styles.main}>
      <div className={styles.container_img}></div>
      <div className={styles.container_info}>
        <h4 className={styles.title}>Equilibrium #3429</h4>
        <span className={styles.description}>
          Our Equilibrium collection promotes balance and calm
        </span>
        <div className={styles.container_info_advance}>
          <span className={styles.info_price}>
            <Image src={icon_eth} alt="icon-ethereum" />
            0.041 ETH
          </span>
          <span className={styles.info_date}>3 days left</span>
        </div>
        <div className={styles.lines}></div>
        <div className={styles.container_info_creator}>
          <Image src={img_profile} alt="image-avatar" width={30} />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </main>
  );
}
