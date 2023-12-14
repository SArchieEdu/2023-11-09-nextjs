/* eslint-disable react/jsx-key */
import Link from "next/link";
import styles from "./styles.module.css";

export const Headphones = ({ headphones }) => {
  return (
    <div>
      <h3>Headphones</h3>
      <div>
        {headphones.map(({ name, id }) => (
          <Link
            href={`/headphones/${id}`}
            className={styles.link}
            prefetch={false}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
