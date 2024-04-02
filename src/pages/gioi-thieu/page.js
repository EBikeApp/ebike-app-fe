"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header/Header";
import HeaderLinks from "@/components/Header/HeaderLinks";
import "../globals.css";
import "@/styles/scss/nextjs-material-kit.scss?v=1.2.0";
import Example from "../components/test";
export default function Home() {
  // how to get all params of endpoint
  const searchParams = useSearchParams();
  useEffect(() => {
    console.log(searchParams.values);
  });
  return (
    <>
      <Header
        brand="EBike"
        color="black"
        rightLinks={<HeaderLinks />}
        changeColorOnScroll={{ color: "white", height: 40 }}
        fixed
      />
      <div>
        <Example />
      </div>
    </>
  );
}
