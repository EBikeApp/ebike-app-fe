"use client";
import React from "react";
import styles from "@/pages/styles.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@/components/CustomButtons/Button.js";
import CategoryButton from "@/pages/CategoryButton";
import SectionCarousel from "@/components/Carousel";
import GridItem from "@/components/Grid/GridItem";
import GridContainer from "@/components/Grid/GridContainer";
import Link from "next/link";
import OutStandingProducts from "@/components/CustomCarousel/OutStandingProducts";
import ProductSale from "@/components/CustomCarousel/ProductSale";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();

  const introduceSession = (
    <div className={classes.sessionIntroduction}>
      <h5 className={classes.sessionTitle}>GIỚI THIỆU</h5>
      <p>Chào mừng đến với Cửa hàng Xe Đạp - Xe Điện Thanh Tùng!</p>
      <p>
        Tại Thanh Tùng, chúng tôi mang đến cho bạn sự lựa chọn đa dạng và chất
        lượng cao về xe đạp và xe điện. Với một mục tiêu duy nhất là đáp ứng nhu
        cầu vận chuyển của cộng đồng một cách hiệu quả và thú vị, chúng tôi
        không ngừng cải tiến dịch vụ và sản phẩm của mình để mang lại trải
        nghiệm tốt nhất cho khách hàng.
      </p>
      <p>
        Chúng tôi tự hào với sự đa dạng của bộ sưu tập xe đạp và xe điện của
        mình, mang lại những giá trị về công nghệ tiên tiến, an toàn qua các
        phương tiện như: xe đạp, xe đạp điện, xe máy điện được nghiên cứu và sản
        xuất bởi các thương hiệu hàng đầu như: ASAMA, JVC,…
      </p>
      <div className={classes.sessionTitle}>
        <Link href="/gioi-thieu">
          <Button type="button" color="info">
            Xem thêm
          </Button>
        </Link>
      </div>
    </div>
  );
  const categorySession = (
    <div className={classes.sessionCategory}>
      <h5 className={classes.sessionTitle}>DANH MỤC SẢN PHẨM</h5>
      <GridContainer>
        <GridItem xs={6} sm={6} md={3}>
          <CategoryButton
            url="/san-pham/xe-dap"
            title="Xe đạp"
            category="Xe đạp"
            imagePath="/bicycle.png"
          />
        </GridItem>
        <GridItem xs={6} sm={6} md={3}>
          <CategoryButton
            url="/san-pham/xe-dap-dien"
            title="Xe đạp điện"
            category="Xe đạp điện"
            imagePath="/electric-bike.png"
          />
        </GridItem>
        <GridItem xs={6} sm={6} md={3}>
          <CategoryButton
            url="/san-pham/xe-may-dien"
            title="Xe đạp"
            category="Xe máy điện"
            imagePath="/electric-motor.png"
          />
        </GridItem>
        <GridItem xs={6} sm={6} md={3}>
          <CategoryButton
            url="/san-pham/phu-kien"
            title="Phụ kiện"
            category="Phụ kiện"
            imagePath="/spare-parts.png"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
  return (
    <div className={classes.root}>
      <SectionCarousel />
      {introduceSession}
      {categorySession}
      <OutStandingProducts />
      <ProductSale />
    </div>
  );
}
