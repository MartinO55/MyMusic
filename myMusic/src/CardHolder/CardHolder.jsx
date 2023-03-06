import React from "react";
import Card from "../Card/Card";
import Albums from "../assets/Albums/Albums.json";
import styles from "./CardHolder.module.scss";

const CardHolder = () => {
  const albums = Object.values(Albums);

  return (
    <>
      <div className={styles.CardHolder}>
        {albums[0].map((album, index) => {
          console.log(album.AlbumArtSrc);
          return (
            <Card
              key={index}
              title={album.Title}
              band={album.Bandname}
              cover={album.AlbumArtSrc}
              description={album.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardHolder;
