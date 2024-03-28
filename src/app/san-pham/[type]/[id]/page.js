"use client";
import ProductDetail from "./productDetail";
export default function ProductDetailPage({ params }) {
  return (
    <div>
      <ProductDetail productId={params.id} />
    </div>
  );
}
