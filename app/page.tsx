import Image from "next/image";
import styles from "./page.module.css";
import logo from '@/images/Logo.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Test Page with TypeScript
        </p>
        <Image src={logo} alt="logo" width={25} />
      </div>

    </main>
  );
}
