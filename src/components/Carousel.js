"use client"
import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";

export default function SectionCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
    return (
        <Carousel {...settings}>
            <div>
                <img
                    src="https://demos.creative-tim.com/nextjs-material-kit/img/bg.jpg"
                    alt="First slide"
                    className="slick-image"
                />
                <div className="slick-caption">
                    <h4>
                        <LocationOn className="slick-icons" />17 Lê Văn Ninh, phường Trường Thọ, Tp.Thủ Đức, Tp.Hồ Chí Minh
                    </h4>
                </div>
            </div>
            <div>
                <img
                    src="https://demos.creative-tim.com/nextjs-material-kit/img/bg2.jpg"
                    alt="Second slide"
                    className="slick-image"
                />
                <div className="slick-caption">
                    <h4>
                        <LocationOn className="slick-icons" />40 Đỗ Xuân Hợp, phường Phước Long B, Tp.Thủ Đức, Tp.Hồ Chí Minh
                    </h4>
                </div>
            </div>
            <div>
                <img
                    src="https://demos.creative-tim.com/nextjs-material-kit/img/bg3.jpg"
                    alt="Third slide"
                    className="slick-image"
                />
                <div className="slick-caption">
                    <h4>
                        <LocationOn className="slick-icons" />76 Quốc lộ 1K, phường Linh Xuân, Tp.Thủ Đức, Tp.Hồ Chí Minh
                    </h4>
                </div>
            </div>
            <div>
                <img
                    src="https://demos.creative-tim.com/nextjs-material-kit/img/bg3.jpg"
                    alt="Third slide"
                    className="slick-image"
                />
                <div className="slick-caption">
                    <h4>
                        <LocationOn className="slick-icons" />238 GS1, Dĩ An, Bình Dương
                    </h4>
                </div>
            </div>
        </Carousel>
    );
}
