"use client";

import CartComponent from "./cart";
import dynamic from "next/dynamic";

export default function CartPage() {
  const ComponentHeader = dynamic(() => import("@/app/components/header"), {
    ssr: false,
  });

  return (
    <div>
      <div className="max-h-6">
        <ComponentHeader />
      </div>
      <div className="pt-20">
        <CartComponent />
      </div>
    </div>
  );
}
