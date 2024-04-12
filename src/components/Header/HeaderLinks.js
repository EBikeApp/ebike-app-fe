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

export default function HeaderLinks({ length }) {
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
            <Link href="/san-pham">
              <div className={classes.dropdownLink}>TẤT CẢ</div>
            </Link>,
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
      <ListItem className={classes.listItem}>
        <Link href="/gio-hang" color="transparent" className={classes.navLink}>
          <div className="relative">
            <ShoppingCartIcon
              className={classes.icons}
              style={{
                maxWidth: "20px",
              }}
            />{" "}
            <span
              className="bg-[#39f]  px-1 text-white 
           rounded-full absolute top-0 right-0 translate-x-1 -translate-y-3 transform font-semibold
            "
            >
              {length}
            </span>
          </div>
          Giỏ hàng
        </Link>
      </ListItem>
    </List>
  );
}
