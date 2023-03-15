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
        <img
          src={coverImgLink}
          className={styles.albumCover}
          onClick={() => setModalOpen(!isModalOpen)}
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
