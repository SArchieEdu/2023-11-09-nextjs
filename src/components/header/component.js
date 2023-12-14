import Link from "next/link";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <Link href="/" className={styles.link}>
        Main
      </Link>
      <Link href="/headphones" className={styles.link}>
        Headphones
      </Link>
    </header>
  );
};
