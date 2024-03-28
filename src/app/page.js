"use client";

import { useContext, useEffect } from "react";
import "./globals.css";
import { ProductsCartContext } from "@/store/products-cart-context";
export default function Home() {
  const { items } = useContext(ProductsCartContext);

  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
