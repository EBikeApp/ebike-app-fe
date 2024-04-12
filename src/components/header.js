import React from "react";
import HeaderLinks from "@/components/Header/HeaderLinks";
import Header from "@/components/Header/Header";
export default function HeaderComponent({ length }) {
  return (
    <Header
      brand="EBike"
      color="white"
      changeColorOnScroll={{ color: "white", height: 40 }}
      fixed
      rightLinks={<HeaderLinks length={length} />}
    />
  );
}
