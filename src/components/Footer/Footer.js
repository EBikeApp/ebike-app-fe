"use client";
/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import LocationOn from "@material-ui/icons/LocationOn";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import styles from "@/styles/jss/nextjs-material-kit/components/footerStyle.js";
import GridContainer from "../Grid/GridContainer";
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <GridContainer spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <h3 className={classes.title}>CỬA HÀNG XE ĐẠP - XE ĐIỆN THANH TÙNG</h3>
          </Grid>
        </GridContainer>
        <GridContainer spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <p>
              <LocationOn className="slick-icon" />&nbsp; Chi nhánh 1: &nbsp; 17 Lê Văn Ninh, phường Linh Tây, Tp.Thủ Đức, Tp.Hồ Chí Minh
            </p>
            <p>
              <LocationOn className="slick-icon" />&nbsp; Chi nhánh 2: &nbsp; 40 Đỗ Xuân Hợp, phường Phước Long B, Tp.Thủ Đức, Tp.Hồ Chí Minh
            </p>
            <p>
              <LocationOn className="slick-icon" />&nbsp; Chi nhánh 3: &nbsp; 76 Quốc lộ 1K, phường Linh Xuân, Tp.Thủ Đức, Tp.Hồ Chí Minh
            </p>
            <p>
              <LocationOn className="slick-icon" />&nbsp; Chi nhánh 4: &nbsp; 238 GS1, Dĩ An, Bình Dương
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <p className="title">THÔNG TIN LIÊN HỆ</p>
            <p>
              <PhoneIcon className="slick-icon" />&nbsp; Hotline:&nbsp; 0974294781 (Nhi)
            </p>
            <p>
              <PhoneIcon className="slick-icon" />&nbsp; Hỗ trợ kỹ thuật/đặt hàng:&nbsp; 0974294781 (Nhi)
            </p>
            <p>
              <EmailIcon className="slick-icon" />&nbsp; Email:&nbsp; thanhtungbicycle@gmail.com
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61550772461381&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="400" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </Grid>
        </GridContainer>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link
                href="/"
                className={classes.block}
              >
                EBike
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                href="/gioi-thieu"
                className={classes.block}
              >
                GIỚI THIỆU
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                href="/"
                className={classes.block}
              >
                LIÊN HỆ
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                href="/"
                className={classes.block}
              >
                CHÍNH SÁCH
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; 2024, made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.facebook.com/minh.nhan.k2"
            className={aClasses}
            target="_blank"
          >
            NT
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
