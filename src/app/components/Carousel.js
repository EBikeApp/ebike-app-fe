"use client"
import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
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
    <div>
        <Carousel {...settings}>
            <div>
                <img
                    src="https://demos.creative-tim.com/nextjs-material-kit/img/bg.jpg"
                    alt="First slide"
                    className="slick-image"
                />
                <div className="slick-caption">
                    <h4>
                        <LocationOn className="slick-icons" />Yellowstone
                        National Park, United States
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
                        <LocationOn className="slick-icons" />Somewhere Beyond,
                        United States
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
                        <LocationOn className="slick-icons" />Yellowstone
                        National Park, United States
                    </h4>
                </div>
            </div>
        </Carousel>
    </div>
);
}
