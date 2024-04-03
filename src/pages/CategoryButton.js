import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    width: 90,
    display: 'inline-block',
    margin: '10px',
    pointerEvents: 'cursor',
    "& div.MuiCardContent-root": {
        padding: '8px',
        fontWeight: 700,
    }
  },
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
                    height="108"
                    width="140"
                    image={imagePath}
                    title={title}
                    />
                    <CardContent>
                        <p>{category}</p>  
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    </div>
  );
}