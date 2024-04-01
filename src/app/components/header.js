import React from "react";
import HeaderLinks from "@/components/Header/HeaderLinks";
import Header from "@/components/Header/Header";
export default function HeaderComponent() {
  return (
    <div className="z-0">
      <Header
        brand="EBike"
        color="black"
        rightLinks={<HeaderLinks />}
        changeColorOnScroll={{ color: "white", height: 40 }}
        fixed
      />
    </div>
  );
}
