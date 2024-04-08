import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 40px',
    backgroundColor: '#e9ecef',
    "& a": {
        fontFamily: "'__Montserrat_f3ee7c', '__Montserrat_Fallback_f3ee7c'!important",
        fontSize: "14px",
    },
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function PageBreadCrumbs({ router }) {
  const classes = useStyles();
  const routerToText = {
    'xe-dap': 'XE ĐẠP',
    'xe-dap-dien': 'XE ĐẠP ĐIỆN',
    'xe-may-dien': 'XE MÁY ĐIỆN',
    'phu-kien': 'PHỤ KIỆN',
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} />
        TRANG CHỦ
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        SẢN PHẨM
      </Link>
      {router && (
      <Link color="inherit" className={classes.link}>
        {routerToText[router]}
      </Link>)}
    </Breadcrumbs>
  );
}