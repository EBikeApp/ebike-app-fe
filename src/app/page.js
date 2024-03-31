"use client";
import { useContext, useEffect } from "react";
import "./globals.css";
import { ProductsCartContext } from "@/store/products-cart-context";
import SectionCarousel from "./components/Carousel";
import Header from "@/components/Header/Header";
import HeaderLinks from "@/components/Header/HeaderLinks";

export default function Home() {
  const { items } = useContext(ProductsCartContext);

  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <>
      <SectionCarousel />
      <Header
        brand="EBike"
        color="transparent"
        changeColorOnScroll={{ color: "white", height: 40 }}
        fixed
        rightLinks={<HeaderLinks />}
      />
      <div className="">hihi</div>
    </>
  );
}
