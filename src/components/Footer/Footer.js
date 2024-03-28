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
import NavPills from "@/components/NavPills/NavPills.js";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "@/styles/jss/nextjs-material-kit/components/footerStyle.js";

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
          color="primary"
          tabs={[
            {
              tabButton: "THÔNG TIN LIÊN HỆ",
              tabContent: (
                <span>
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate
                    B2C users after installed base benefits.
                  </p>
                  <br />
                  <p>
                    Dramatically visualize customer directed convergence
                    without revolutionary ROI. Collaboratively
                    administrate empowered markets via plug-and-play
                    networks. Dynamically procrastinate B2C users after
                    installed base benefits.
                  </p>
                  <br />
                  <p>This is very nice.</p>
                </span>
              )
            },
            {
              tabButton: "ĐỊA CHỈ",
              tabContent: (
                <span>
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely
                    deliverables for real-time schemas.
                  </p>
                  <br />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </span>
              )
            },
            {
              tabButton: "Options",
              tabContent: (
                <span>
                  <p>
                    Completely synergize resource taxing relationships
                    via premier niche markets. Professionally cultivate
                    one-to-one customer service with robust ideas.{" "}
                  </p>
                  <br />
                  <p>
                    Dynamically innovate resource-leveling customer
                    service for state of the art customer service.
                  </p>
                </span>
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
