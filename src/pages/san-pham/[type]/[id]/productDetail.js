"use client";
import { Button, notification, Spin } from "antd";
import { numberToVND } from "@/config/utils/common";
import React, { useEffect, useState, useContext } from "react";
import ProductDetailCard from "./productCardComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebase/firebase";
import { ProductsCartContext } from "@/store/products-cart-context";

export default function ProductDetail({ productId }) {
  const { addToCart, items } = useContext(ProductsCartContext);

  const [stateOfProduct, setStateOfProduct] = useState({ product: null });

  useEffect(() => {
    const getProduct = async (productId) => {
      const q = query(collection(db, "products"), where("id", "==", productId));
      const querySnapShot = await getDocs(q);
      const data = querySnapShot.docs.map((doc) => doc.data());
      return data;
    };
    getProduct(productId).then((data) => {
      setStateOfProduct({
        product: data[0],
      });
    });
  }, []);

  const openNotification = (title, message) => {
    notification.open({
      message: title,
      description: message,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addToCart(stateOfProduct.product, e.target[0].value, stateOfProduct.url);
    openNotification("Thông Báo", "Thêm vào giỏ hàng thành công");
    console.log(items);
  };

  return (
    <div className="">
      <div className="flex flex-col m-auto md:flex sm:flex-row ">
        <div className="w-auto flex justify-center ">
          <ProductDetailCard
            Images={stateOfProduct?.product?.thumbnail}
            DiscountPercentage={stateOfProduct?.product?.discountPercentage}
          />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col bg-[#cfcfcf2b] p-4">
          <div className="">
            <div className="min-h-5 font-bold text-2xl text-[#262626] ">
              <p className="">{stateOfProduct?.product.title}</p>
            </div>
            <div>
              <p className="w-1/3 w-full text-2xl font-semibold overflow-visible">
                Hãng: {stateOfProduct?.product.brand}
              </p>
            </div>
            {stateOfProduct?.product.discountPercentage > 0 && (
              <p className="w-1/3 block font-semibold line-through text-gray-500 text-3xl md:text-2xl ">
                {numberToVND(
                  stateOfProduct?.product.price +
                    (stateOfProduct?.product.price *
                      stateOfProduct?.product.discountPercentage) /
                      100,
                )}
              </p>
            )}
            <p className="w-1/3 block font-bold text-red-500 text-3xl md:text-2xl">
              {numberToVND(stateOfProduct?.product.price)}
            </p>{" "}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-1 items-center">
              <input
                type="number"
                min={1}
                step={1}
                name="quantity"
                defaultValue={1}
                className="w-1/3 block border border-gray-300 p-2 rounded-md"
              />
              <button
                type="button"
                className="rounded-md bg-blue-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
