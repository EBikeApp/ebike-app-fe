"use client";

import CartComponent from "./cart";
import Header from "@/components/Header/Header";
import HeaderLinks from "@/components/Header/HeaderLinks";
import "../globals.css";
import "@/styles/scss/nextjs-material-kit.scss?v=1.2.0";
export default function CartPage() {
  return (
    <div>
      <div className="max-h-6">
        <Header
          brand="EBike"
          color="black"
          rightLinks={<HeaderLinks />}
          changeColorOnScroll={{ color: "white", height: 40 }}
          fixed
        />
      </div>
      <div className="pt-20">
        <CartComponent />
      </div>
    </div>
  );
}
