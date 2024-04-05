
import React from "react";
import HeaderLinks from "@/components/Header/HeaderLinks";
import Header from "@/components/Header/Header";
export default function HeaderComponent() {
  return (
    <Header
      brand="EBike"
      color="transparent"
      rightLinks={<HeaderLinks />}
      changeColorOnScroll={{ color: "white", height: 40 }}
      fixed
    />
  );
}
