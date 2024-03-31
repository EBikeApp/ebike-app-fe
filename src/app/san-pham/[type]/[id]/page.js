"use client";
import ProductDetail from "./productDetail";
import "../../../globals.css";
import "@/styles/scss/nextjs-material-kit.scss?v=1.2.0";
import { useEffect } from "react";
import Header from "@/components/Header/Header";
import HeaderLinks from "@/components/Header/HeaderLinks";

export default function ProductDetailPage({ params }) {
  useEffect(() => {
    console.log(params);
  });

  return (
    <div>
      <Header
        brand="EBike"
        color="black"
        rightLinks={<HeaderLinks />}
        changeColorOnScroll={{ color: "white", height: 40 }}
        fixed
      />
      // // <ProductDetail productId={params.id} />
    </div>
  );
}
