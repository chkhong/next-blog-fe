import { Router, useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => (window.location.href = "https://facebook.com")}>
        Facebook
      </div>
      <div
        onClick={() => (window.location.href = "https://github.com/chkhong")}
      >
        Github
      </div>
    </div>
  );
};
