import React from "react";
import { useState } from "react";
import AlbumDetails from "../AlbumDetails/AlbumDetails";
import styles from "./Card.module.scss";

const Card = ({ title, band, coverImgLink, description }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    //so design for this is image only, but it pops up into a modal with more information on click
    <>
      <div className={styles.Card}>
        <h3>{title}</h3>
        <p>{band}</p>
        <p>{description}</p>
        <img
          src={coverImgLink}
          className={styles.albumCover}
          onClick={() => setModalOpen(true)}
        ></img>
        {isModalOpen ? (
          <AlbumDetails
            title={title}
            bandName={band}
            description={description}
            coverImgLink={coverImgLink}
          />
        ) : null}
      </div>
    </>
  );
};

export default Card;
