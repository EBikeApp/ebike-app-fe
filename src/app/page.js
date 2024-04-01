"use client";
import SectionCarousel from "./components/Carousel";
import dynamic from "next/dynamic";
export default function Home() {
  const HeaderComponent = dynamic(
    () => import("@/app/components/headerForRootPage"),
    {
      ssr: false,
    },
  );

  return (
    <>
      <SectionCarousel />
      <HeaderComponent />
      <div className="">hihi</div>
    </>
  );
}
