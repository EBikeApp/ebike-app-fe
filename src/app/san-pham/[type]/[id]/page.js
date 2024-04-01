"use client";
import ProductDetail from "./productDetail";
import "../../../globals.css";
import "@/styles/scss/nextjs-material-kit.scss?v=1.2.0";
import { useEffect } from "react";

export default function ProductDetailPage({ params }) {
  useEffect(() => {
    console.log(params);
  });

  return (
    <div>
      // // <ProductDetail productId={params.id} />
    </div>
  );
}
