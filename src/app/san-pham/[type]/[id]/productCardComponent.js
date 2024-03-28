import React, { useState } from "react";
import { Image } from "antd";
import { Badge } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      role="presentation"
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        top: "50%",
      }}
      onClick={() => onClick()}
    />
  );
}

export default function ProductDetailCard({ Images, DiscountPercentage }) {
  const [currentImage, setCurrentImage] = useState(Images[0]);
  // const testFunc = () => {
  //   console.log("test");
  //   setCurrentImage(Images[1]);
  // };
  const settings = {
    infinite: true,
    customPaging: function (i) {
      return (
        <div>
          <Image preview={true} className="h-7" src={Images[i]} />
        </div>
      );
    },
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    dotsClass: "slick-dots slick-thumb",
    slidesToShow: Images >= 4 ? 4 : Images.length,
    slidesToScroll: 1,
    arrows: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const handleClick = (index) => {
    setCurrentImage(Images[index]);
  };
  const BadgeHiddenOrNot = {
    display: DiscountPercentage > 0 ? "block" : "none",
  };
  return (
    <div className="flex flex-col w-full justify-between mx-5 my-5">
      <div className="max-w-sm m-2">
        <Badge.Ribbon
          className="p-2 px-3 text-md font-semibold"
          text={`Giảm ${DiscountPercentage}%`}
          color="red"
          style={BadgeHiddenOrNot}
        >
          <Image
            // preview={false}
            className="md: h-3/4 transition-all group-hover:cursor-pointer group-hover:transform duration-300 group-hover:scale-105"
            src={currentImage}
          />
        </Badge.Ribbon>
      </div>
      <div className="max-w-sm">
        <Slider {...settings} afterChange={(index) => handleClick(index)}>
          {Images.map((image) => {
            return (
              <div className="w-24">
                <Image
                  preview={false}
                  className="cursor-pointer p-[0.3rem] border-[0.1rem] border-solid border-gray-300
rounded-md
                  "
                  src={image}
                  key={image}
                  onClick={() => handleClick(Images.indexOf(image))}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
