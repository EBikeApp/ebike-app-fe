"use client";
import SectionCarousel from "@/pages/Carousel";
import styles from "@/pages/styles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(styles);
export default function Home() {
  const classes = useStyles();

  return (
    <>
      <SectionCarousel />
      <div className={classes.container}>hihi</div>
    </>
  );
}
