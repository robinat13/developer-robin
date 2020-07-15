import React from "react";
import styles from "./floatingcloud.module.css";

export const FloatingCloud = ({ top, left, right, opacity }) => {
  const containerStyle = {
    top: top && `${top}%`,
    left: left && `${left}%`,
    right: right && `${right}%`,
  };

  const imageStyles = {
    opacity: opacity ? opacity : 1,
  };

  return (
    <div className={styles["cloud-container"]} style={containerStyle}>
      <img
        src="/images/crayon-cloud.png"
        alt="floating_cloud"
        className={styles["floating-cloud"]}
        style={imageStyles}
      />
    </div>
  );
};
