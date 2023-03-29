import React from "react";
import styles from "./AlbumDetails.module.scss";

const AlbumDetails = ({ title, bandName, description, coverImgLink }) => {
  return (
    <>
      <div
        className={styles.AlbumDetailsCard}
        style={{
          backgroundImage: `url(${coverImgLink})`,
        }}
      >
        <div className={styles.AlbumDetailsCard_Content}>
          <h3>{title}</h3>
          <h4>{bandName}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default AlbumDetails;
