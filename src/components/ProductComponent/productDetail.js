"use client";

import React, { useEffect, useState } from "react";
import ProductDetailCard from "./productCardComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebase/firebase";
import Loading from "../Loading/Loading";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";

export default function ProductDetail({ productId }) {

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async (productId) => {
      const q = query(collection(db, "products"), where("id", "==", productId));
      const querySnapShot = await getDocs(q);
      const data = querySnapShot.docs.map((doc) => doc.data());
      return data;
    };
    getProduct(productId).then((data) => {
      console.log(data)
      setIsLoading(false);
      setProduct(data[0]);
    }).catch((error) => {
      alert("Có lỗi xảy ra, vui lòng thử lại sau");
    });
  }, []);


  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-auto flex justify-center md:ml-6">
          <ProductDetailCard
            Images={product.thumbnail}
            DiscountPercentage={product.discountPercentage}
          />
        </div>
        <ProductPrice product={product} />
      </div>
      <div className="w-full flex flex-col bg-[#cfcfcf2b] p-4 ">
        <div>
          <p className="text-2xl font-semibold">Mô tả sản phẩm </p>
          <ProductDescription content={product.description} />
        </div>
      </div>
    </div>
  );
}
