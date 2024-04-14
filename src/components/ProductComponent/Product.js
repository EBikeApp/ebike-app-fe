"use client";
import React, { useMemo } from "react";
import { Card, CardActionArea, CardMedia, CardContent, Chip } from "@material-ui/core";
import { numberToVND } from "@/config/utils/common";
import { usePathname, useRouter } from "next/navigation";
import { makeStyles } from "@material-ui/core/styles";

import LoyaltyIcon from '@material-ui/icons/Loyalty';

import { cardTitle } from "@/styles/jss/nextjs-material-kit.js";
import Link from "next/link";

const styles = {
  cardTitle,
  root: {
    width: '100%',
    display: 'inline-block',
    margin: '10px',
    pointerEvents: 'cursor',
    "& div.MuiCardContent-root": {
        padding: '20px 0',
    },
    " & img": {
      height: "180px",
      objectFit: "contain",
    },
  },
  category: {
    textAlign: 'left',
    fontSize: '14px',
    padding: '0 10px',
  },
  price: {
    textAlign: 'left',
    fontSize: '16px',
    padding: '0 10px',
    fontWeight: 700,
  },
  discountPercentage: {
    position: 'absolute',
    top: '5px',
    right: '0'
  }
};

const useStyles = makeStyles(styles);

const Product = ({ product, index }) => {
  const BadgeHiddenOrNot = {
    display: product.discountPercentage > 0 ? "block" : "none",
  };
  const typeToPath = {
      bicycle: "xe-dap",
      eBike: "xe-dap-dien",
      eMotobike: "xe-may-dien",
      fitting: "phu-kien",
  };
  const router = useRouter();
  const href = useMemo(() => `/san-pham/${typeToPath[product.type]}/${product.id}`, 
  [product.id, product.type]
);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href={href}>
        <Card>
            <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={product.thumbnail[0]}
                  title={product.title}
                />
                <CardContent>
                    {
                      product. discountPercentage ? 
                      (<Chip
                        className={classes.discountPercentage}
                        icon={<LoyaltyIcon />}
                        label={`Giảm ${product.discountPercentage}%`}
                        color="secondary"
                      />) : null
                    }
                    <p className={`${classes.category} __className_f3ee7c`}>
                      {product?.title}
                    </p>  
                    <p className={`${classes.price} __className_f3ee7c`}>
                      {numberToVND(
                                  product.price -
                                    (product.price * product.discountPercentage) / 100,
                      )}
                    </p>
                </CardContent>
            </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};
export default Product;
