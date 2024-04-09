import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    margin: '10px',
    pointerEvents: 'cursor',
    "& div.MuiCardContent-root": {
        padding: '20px',
    },
    "& img": {
      background: "rgb(2,0,36)",
      background: "linear-gradient(to right top, #f5f6f8, #d6efff, #a7edff, #6beaf6, #2de6d5)",
      "&:hover": {
        background: "linear-gradient(to right top, #f5f6f8, #b2c4f4, #7a90eb, #4a5adb, #2716c2)",
      }
    },
  },
  category: {
    textAlign: 'center',
    margin: '0px 10px',
    fontSize: '14px',
    // fontWeight: 400,
  }
});

export default function CateGoryButton({url, imagePath, title, category }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Link href={url}>
            <Card>
                <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      // height="108"
                      // width="140"
                      image={imagePath}
                      title={title}
                    />
                    <CardContent>
                        <p className={`${classes.category} __className_f3ee7c`}>{category.toUpperCase()}</p>  
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    </div>
  );
}