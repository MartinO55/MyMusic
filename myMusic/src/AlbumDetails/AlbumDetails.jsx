import React from "react";
import styles from "./AlbumDetails.module.scss";

const AlbumDetails = ({ title, bandName, description, coverImgLink }) => {
  return (
    <>
      <div className={styles.AlbumDetailsCard}>
        <h3>{title}</h3>
        <p>{bandName}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default AlbumDetails;
