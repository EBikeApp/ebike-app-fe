import { db } from "@/config/firebase/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Product from "../ProductComponent/Product";
import Carousel from "react-slick";
import "@/pages/styles";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        width: "30px",
      }}
      onClick={() => onClick()}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        width: "30px",
      }}
      onClick={() => onClick()}
    />
  );
}

export default function ProductSale() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    queryProductsFunc();
  }, []);

  const queryProductsFunc = async () => {
    const q = query(
      collection(db, "products"),
      orderBy("discountPercentage", "desc"),
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setListProducts(data.slice(0, 6));
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-14 pb-24">
      <h5 className="text-2xl font-semibold text-center">
        SẢN PHẨM KHUYẾN MÃI
      </h5>
      <div className="w-[80%]  m-auto">
        <Carousel {...settings}>
          {listProducts.map((product, index) => (
            <Product key={index} product={product} index={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
