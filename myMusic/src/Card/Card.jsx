import React from "react";
import { useState } from "react";
import AlbumDetails from "../AlbumDetails/AlbumDetails";
import styles from "./Card.module.scss";

const Card = ({ title, band, coverImgLink, description }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [animateFlip, setAnimateFlip] = useState(false);

  return (
    //so design for this is image only, but it pops up into a modal with more information on click
    <>
      <div className={styles.Card}>
        <img
          src={coverImgLink}
          className={animateFlip ? styles.albumCoverFlipped : styles.albumCover}
          onClick={() => [
            setModalOpen(!isModalOpen),
            setAnimateFlip(!animateFlip),
          ]}
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
