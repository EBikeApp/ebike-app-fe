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
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
        <Link href="/" color="transparent" className={classes.navLink}>
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
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/san-pham">
              <div className={classes.dropdownLink}>Tất cả</div>
            </Link>,
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
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/gio-hang" color="transparent" className={classes.navLink}>
          <ShoppingCartIcon
            className={classes.icons}
            style={{
              maxWidth: "20px",
            }}
          />{" "}
          Giỏ hàng
        </Link>
      </ListItem>
    </List>
  );
}
