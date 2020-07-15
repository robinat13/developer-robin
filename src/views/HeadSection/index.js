import React from "react";
import styles from "./headsection.module.css";
import { FloatingCloud } from "../../components/FloatingClouds";

export const HeadSection = () => {
  return (
    <div className={styles["head"]}>
      {/* <div className={styles["head-background-container"]}>
        <img
          src="/images/mountain.png"
          alt="mountain_image"
          className={styles["head-background-image"]}
        />
      </div> */}
      <FloatingCloud top="30" left="10" opacity="0.3" />
      <FloatingCloud right="10" top="40" opacity="0.5" />
    </div>
  );
};
