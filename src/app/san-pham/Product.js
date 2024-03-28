"use client";
import React from "react";
import { Badge, Card, Image } from "antd";
import { numberToVND } from "@/config/utils/common";
import { usePathname, useRouter } from "next/navigation";
const Product = ({ product, index }) => {
  const BadgeHiddenOrNot = {
    display: product.discountPercentage > 0 ? "block" : "none",
  };
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className="max-w-sm m-2 cursor-pointer"
      onClick={() => {
        router.push(`${pathname}/${product.id}`);
      }}
    >
      <Badge.Ribbon
        className="p-2 px-3 text-md font-semibold"
        text={`Giảm ${product.discountPercentage}%`}
        color="red"
        style={BadgeHiddenOrNot}
      >
        <Card
          className="group block"
          key={index}
          cover={
            <Image
              preview={false}
              className="md: h-3/4 transition-all group-hover:cursor-pointer group-hover:transform duration-300 group-hover:scale-105"
              src={product.thumbnail[0]}
            />
          }
        >
          <Card.Meta
            title={
              <div className="text-center">
                {/* i want to align size of this text when screen is small */}
                <p>{product?.title}</p>
                <br />
                <div className="flex gap-2 justify-center">
                  {product.discountPercentage > 0 && (
                    <p className="font-normal self-center line-through">
                      {numberToVND(
                        product.price +
                          (product.price * product.discountPercentage) / 100,
                      )}
                    </p>
                  )}
                  <p className="text-red-500 text-2xl">
                    {numberToVND(product.price)}
                  </p>
                </div>
                <button
                  type="button"
                  className="cursor-pointer rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Xem chi tiết
                </button>
              </div>
            }
            style={{ height: "20%" }}
          ></Card.Meta>
        </Card>
      </Badge.Ribbon>
    </div>
  );
};
export default Product;
