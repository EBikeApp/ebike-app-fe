"use client";
import React from 'react';
import styles from "@/app/styles.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@/components/CustomButtons/Button.js';
import CategoryButton from '@/app/CategoryButton';
import SectionCarousel from "@/app/Carousel";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import GridContainer from '@/components/Grid/GridContainer';
import GridItem from '@/components/Grid/GridItem';


const useStyles = makeStyles(styles);

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles(matches);
  const introduceSession = (
    <GridItem xs={12} sm={12} md={6}>
      <div className={classes.sessionContainer}>
        <h5 className={classes.sessionTitle}>GIỚI THIỆU</h5>
        <p>
          [Tên Công Ty]: nơi mang đến sự tiện lợi và thú vị cho cuộc sống hàng ngày của bạn với các sản phẩm xe đạp điện chất lượng cao.
        </p>
        <p>
          [Tên Công Ty] là một trong những nhà cung cấp hàng đầu về xe đạp điện tại Việt Nam ...
        </p>
        <div className={classes.sessionTitle}>
          <Button type="button" color="info" simple>Xem thêm</Button>
        </div>
      </div>
    </GridItem>
  );
  const categorySession = (
    <GridItem xs={12} sm={12} md={6}>
      <div className={classes.sessionContainer}>
        <h5 className={classes.sessionTitle}>DANH MỤC SẢN PHẨM</h5>
        <div className={classes.sessionTitle}>
          <CategoryButton url="/san-pham/xe-dap" title="Xe đạp" category="Xe đạp" imagePath="/sign.jpg" />
          <CategoryButton url="/san-pham/xe-dap-dien" title="Xe đạp điện" category="Xe đạp điện" imagePath="/sign.jpg" />
          <CategoryButton url="/san-pham/xe-may-dien" title="Xe đạp" category="Xe máy điện" imagePath="/sign.jpg" />
          <CategoryButton url="/san-pham/phu-kien" title="Phụ kiện" category="Phụ kiện" imagePath="/sign.jpg" />
        </div>
      </div>
    </GridItem>
  );
  return (
    <div className={classes.root}>
        <SectionCarousel />
        <GridContainer className={classes.container} spacing={2}>
          {introduceSession}
          {categorySession}
        </GridContainer>
    </div>
  );
}