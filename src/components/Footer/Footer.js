"use client";
/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavPills from "@/components/NavPills/NavPills.js";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import styles from "@/styles/jss/nextjs-material-kit/components/footerStyle.js";
import GridContainer from "../Grid/GridContainer";

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
        <div>
        <NavPills
          color="inherit"
          horizontal={{
            tabsGrid: {xs: 4,  sm: 4, md: 4 },
            contentGrid: { xs: 8, sm: 8, md: 8 }
          }}
          tabs={[
            {
              tabButton: "THÔNG TIN LIÊN HỆ",
              tabIcon: ContactSupportIcon,
              tabContent: (
                <GridContainer className={classes.navPillContent}>
                  <Grid item xs={12} sm={6} md={6} className={classes.gridItemLeft}>
                    <p>
                      <PhoneIcon color="primary"/>
                      &emsp;
                      +84 0333 879 987
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <p>
                      <EmailIcon color="primary"/> 
                      &emsp;
                      milo.nhantran@gmail.com
                    </p>
                  </Grid>
                </GridContainer>
              ),
            }
          ]}
        />
        <NavPills
          color="inherit"
          horizontal={{
            tabsGrid: {xs: 4,  sm: 4, md: 4 },
            contentGrid: { xs: 8, sm: 8, md: 8 }
          }}
          tabs={[
            {
              tabButton: "ĐỊA CHỈ",
              tabIcon: BusinessIcon,
              tabContent: (
                <GridContainer className={classes.navPillContent}>
                  <Grid item xs={12} sm={6} md={6} className={classes.gridItemLeft}>
                    <p>
                      <LocationOnIcon color="primary"/>
                    &emsp; 99/1/19 Lê Văn Ninh, phường Linh Trung, thành phố Thủ Đức
                    </p>
                    <p>
                      <LocationOnIcon color="primary"/>
                    &emsp; 99/1/19 Lê Văn Ninh, phường Linh Trung, thành phố Thủ Đức
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <p>
                      <LocationOnIcon color="primary"/>
                      &emsp; 99/1/19 Lê Văn Ninh, phường Linh Trung, thành phố Thủ Đức
                    </p>
                  </Grid>
                </GridContainer>
              )
            }
          ]}
        />
        </div>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Creative Tim
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.creative-tim.com?ref=njsmk-footer"
            className={aClasses}
            target="_blank"
          >
            Creative Tim
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
