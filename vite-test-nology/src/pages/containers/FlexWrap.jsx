import styles from "./FlexWrap.module.scss";

const FlexWrap = ({ reverse, children }) => {
  const classes = [styles.wrap];

  if (reverse) {
    classes.push(styles.wrap_reverse);
  }

  return <div className={classes.join(" ")}>{children}</div>;
};

export default FlexWrap;
