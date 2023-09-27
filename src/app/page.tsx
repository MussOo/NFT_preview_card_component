import Image from "next/image";
import styles from "./page.module.css";
import Nft_card from "./components/nft_card/page";
export default function Home() {
  return (
    <main className={styles.main}>
      <Nft_card />
    </main>
  );
}
