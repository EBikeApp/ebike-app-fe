/*eslint-disable*/
"use client";
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps } from "@material-ui/icons";
<<<<<<< Updated upstream
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
=======
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
>>>>>>> Stashed changes
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "@/components/CustomDropdown/CustomDropdown.js";
import Button from "@/components/CustomButtons/Button.js";

import styles from "@/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
<<<<<<< Updated upstream
        <Link href="/" color="transparent" className={classes.navLink}>
=======
        <Link
          href="/"
          color="transparent"
          className={classes.navLink}
        >
>>>>>>> Stashed changes
          TRANG CHỦ
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="SẢN PHẨM"
          buttonProps={{
            className: classes.navLink,
<<<<<<< Updated upstream
            color: "transparent",
=======
            color: "transparent"
>>>>>>> Stashed changes
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/san-pham">
              <div className={classes.dropdownLink}>Tất cả</div>
            </Link>,
<<<<<<< Updated upstream
            <Link href="/san-pham/xe-dap">
              <div className={classes.dropdownLink}>Xe đạp</div>
            </Link>,
            <Link href="/san-pham/xe-dap-dien">
              <div className={classes.dropdownLink}>Xe đạp điện</div>
            </Link>,
            <Link href="/san-pham/xe-may-dien">
              <div className={classes.dropdownLink}>Xe máy điện</div>
            </Link>,
            <Link href="/san-pham/phu-kien">
              <div className={classes.dropdownLink}>Phụ kiện</div>
            </Link>,
=======
            <Link href="/san-pham/xeDapDien">
              <div className={classes.dropdownLink}>Xe đạp điện</div>
            </Link>
>>>>>>> Stashed changes
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
<<<<<<< Updated upstream
        <Link href="/gio-hang" color="transparent" className={classes.navLink}>
          <ShoppingCartIcon
            className={classes.icons}
            style={{
              maxWidth: "20px",
            }}
          />{" "}
          Giỏ hàng
=======
        <Link
          href="/gio-hang"
          color="transparent"
          className={classes.navLink}
        >
          <ShoppingCartIcon className={classes.icons} /> Giỏ hàng
>>>>>>> Stashed changes
        </Link>
      </ListItem>
    </List>
  );
}
