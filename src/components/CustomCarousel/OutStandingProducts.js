import { db } from "@/config/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Product from "../ProductComponent/Product";
import Carousel from "react-slick";
// import "@/pages/styles";
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

export default function OutStandingProducts() {
  const [listProducts, setListProducts] = useState([]);

  const [listProductsId, _] = useState([
    "2af12321-e7d2-4ce6-9878-466fcf667a7e",
    "93fdef17-f98e-4f2c-860d-dd795d85bb86",
    "f4e3c6a9-7d0b-4f0a-8f1d-8a3c6e0b5d1b",
    "4419aa4b-9d0e-44e8-890e-6d49b97646fa",
    "46e20a2d-8f64-4798-ae4c-1f0d59747c0c",
    "645753d9-257b-4e6d-9d92-519309bccc22",
  ]);

  useEffect(() => {
    queryProductsFunc(listProductsId);
  }, []);

  const queryProductsFunc = async (listProductsId) => {
    const q = query(
      collection(db, "products"),
      where("id", "in", listProductsId),
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setListProducts(data);
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
    <div className="mt-14">
      <h5 className="text-2xl font-semibold text-center">SẢN PHẨM NỔI BẬT</h5>
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
