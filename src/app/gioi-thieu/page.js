"use client";
import { useEffect } from "react";
import Hihi from "./test";
import { useSearchParams } from "next/navigation";
export default function Home() {
  // how to get all params of endpoint
  const searchParams = useSearchParams();
  useEffect(() => {
    console.log(searchParams.values);
  });
  return (
    <>
      <h1>Giới thiệu</h1>
      <Hihi />
    </>
  );
}
