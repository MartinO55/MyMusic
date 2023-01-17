import styles from "./Card.module.scss";

function Card({ title, bandName, rating, albumArt }) {
  let classes = styles.card;
  let useBackgroundimg = { backgroundImage: `url(${albumArt})` };
  let fiveStar = styles.fiveStar;

  let Banner_Container = styles.Banner_Container;
  let Banner = styles.Banner;
  let albumTitle = styles.albumTitle;
  let band = styles.band;

  if (rating === "* * * * *") {
    console.log(bandName);
    classes = styles.fiveStar;
  }

  return (
    <>
      <section className={classes} style={useBackgroundimg}>
        <div className={Banner_Container}>
          <div className={Banner}>{rating}</div>
        </div>
        <h3 className={albumTitle}>{title}</h3>
        <p className={band}>{bandName}</p>
      </section>
    </>
  );
}

export default Card;
