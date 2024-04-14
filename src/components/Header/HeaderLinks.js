/*eslint-disable*/
"use client";
import React, { useContext } from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps } from "@material-ui/icons";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ProductsCartContext } from "@/store/products-cart-context";
import Badge from '@material-ui/core/Badge';

// core components
import CustomDropdown from "@/components/CustomDropdown/CustomDropdown.js";

import styles from "@/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export const ShoppingCart = () => {
  const classes = useStyles();
  const { items } = useContext(ProductsCartContext);
  return (
        <Link href="/gio-hang" color="transparent" className={`${classes.navLink} ${classes.cartLink}`}>
          <Badge badgeContent={items.length.toString()} color="secondary">
            <ShoppingCartIcon
              className={classes.icons}
              style={{
                maxWidth: "20px",
              }}
            />
          </Badge>
          &nbsp; Giỏ hàng
      </Link>
  );
}

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/" color="transparent" className={classes.navLink}>
          TRANG CHỦ
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          href="/gioi-thieu"
          color="transparent"
          className={classes.navLink}
        >
          GIỚI THIỆU
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="SẢN PHẨM"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/san-pham/xe-dap">
              <div className={classes.dropdownLink}>XE ĐẠP</div>
            </Link>,
            <Link href="/san-pham/xe-dap-dien">
              <div className={classes.dropdownLink}>XE ĐẠP ĐIỆN</div>
            </Link>,
            <Link href="/san-pham/xe-may-dien">
              <div className={classes.dropdownLink}>XE MÁY ĐIỆN</div>
            </Link>,
            <Link href="/san-pham/phu-kien">
              <div className={classes.dropdownLink}>PHỤ KIỆN</div>
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
