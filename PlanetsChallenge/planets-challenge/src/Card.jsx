import styles from "./Card.module.scss";

function Card({
  image,
  name,
  diameter,
  distanceFromSun,
  numberOfMoons,
  lengthOfYear,
}) {
  let classes = styles.card;

  if (numberOfMoons === 0) {
    classes = styles.noMoons;
  }

  return (
    <>
      <section className={classes}>
        <h2>{name}</h2>
        <p>{diameter}</p>
        <p>{distanceFromSun}</p>
        <p>{numberOfMoons}</p>
        <p>{lengthOfYear}</p>
        <img src={image} />
      </section>
    </>
  );
}

export default Card;
