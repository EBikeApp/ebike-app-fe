"use client";
import React from "react";
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
  const pathname = usePathname();
  const router = useRouter();

  const classes = useStyles();

  return (
    // <div
    //   className="max-w-sm m-2 cursor-pointer"
    //   onClick={() => {
    //     router.push(`${pathname}/${product.id}`);
    //   }}
    // >
    //   <Badge.Ribbon
    //     className="p-2 px-3 text-md font-semibold"
    //     text={`Giảm ${product.discountPercentage}%`}
    //     color="red"
    //     style={BadgeHiddenOrNot}
    //   >
    //     <Card
    //       className="group block"
    //       key={index}
    //       cover={
    //         <Image
    //           preview={false}
    //           className="md: h-3/4 transition-all group-hover:cursor-pointer group-hover:transform duration-300 group-hover:scale-105"
    //           src={product.thumbnail[0]}
    //         />
    //       }
    //     >
    //       <Card.Meta
    //         title={
    //           <div className="text-center">
    //             {/* i want to align size of this text when screen is small */}
    //             <p>{product?.title}</p>
    //             <br />
    //             <div className="flex gap-2 justify-center">
    //               {product.discountPercentage > 0 && (
    //                 <p className="font-normal self-center line-through">
    //                   {numberToVND(
    //                     product.price +
    //                       (product.price * product.discountPercentage) / 100,
    //                   )}
    //                 </p>
    //               )}
    //               <p className="text-red-500 text-2xl">
    //                 {numberToVND(product.price)}
    //               </p>
    //             </div>
    //             <Button color="info" type="button">
    //               Xem chi tiết
    //             </Button>
    //           </div>
    //         }
    //         style={{ height: "20%" }}
    //       ></Card.Meta>
    //     </Card>
    //   </Badge.Ribbon>
    // </div>
    <div className={classes.root}>
      <Link href={`${pathname}/${product.id}`}>
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
                                  product.price +
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
