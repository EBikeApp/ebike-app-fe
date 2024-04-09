"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import Product from "@/components/ProductComponent/Product";
import {
  and,
  collection,
  getDocs,
  or,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebase/firebase";
import Example from "@/components/sidebarForFilter";
import Loading from "../Loading/Loading";
import GridContainer from "@/components/Grid/GridContainer";
import GridItem from "@/components/Grid/GridItem";

export default function ListProductsPage({ typeProp }) {
  const [isLoading, setIsLoading] = useState(false);
  const [productsFromDatabase, setProductsFromDatabase] = useState([]);
  const [listProduct, setListProduct] = useState([]);

  const [path, _] = useState([
    {
      label: "xe-dap",
      type: "bicycle",
    },
    {
      label: "xe-dap-dien",
      type: "eBike",
    },
    {
      label: "xe-may-dien",
      type: "eMotobike",
    },
    {
      label: "phu-kien",
      type: "fitting",
    },
  ]);
  const [type, setType] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setType(path.find((item) => item.label === typeProp.type).type);
    const getAllDocsFromDatabase = async (type) => {
      // setIsLoading(true);
      const q = query(collection(db, "products"), where("type", "==", type));
      const querySnapShot = await getDocs(q);
      const data = querySnapShot.docs.map((doc) => doc.data());
      return data;
    };

    getAllDocsFromDatabase(type).then((data) => {
      setIsLoading(false);
      console.log(data);
      setProductsFromDatabase(data);
      setListProduct([...data]);
    });
  }, [type, typeProp]);

  // haven't done yet

  const onSearch = (value) => {
    const currentListProduct = productsFromDatabase.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase()),
    );
    setListProduct([...currentListProduct]);
  };

  const setUpForBrandSearching = productsFromDatabase
    .map((item) => {
      return {
        label: item.brand,
        key: item.brand,
      };
    })
    .concat({
      label: "Tất cả",
      key: "all",
    })
    .filter((item, index, self) => {
      return index === self.findIndex((t) => t.key === item.key);
    });

  const ascOrDescProps = {
    items: [
      {
        label: "Giá tăng dần",
        key: "asc",
      },
      {
        label: "Giá giảm dần",
        key: "desc",
      },
    ],
    onClick: (e) => {
      const selected = ascOrDescProps.items.find((item) => item.key === e.key);
      if (selected) {
        setSelectedAscOrDesc(selected);
      }
      if (selected.key === "asc") {
        const sortedList = listProduct.sort((a, b) => a.price - b.price);
        setListProduct([...sortedList]);
      }
      if (selected.key === "desc") {
        const sortedList = listProduct.sort((a, b) => b.price - a.price);
        setListProduct([...sortedList]);
      }
    },
  };

  const handleSumitFunc = async (rangePrices, selectedBrands) => {
    const { min, max } = rangePrices;
    console.log(typeof min, typeof max, selectedBrands);

    try {
      setIsLoading(true);
      const q = query(
        collection(db, "products"),
        and(
          where("type", "==", type),
          rangePrices
            ? max != "infinity"
              ? and(where("price", ">=", min), where("price", "<=", max))
              : where("price", ">=", min)
            : null,
          selectedBrands.length > 0
            ? selectedBrands.findIndex((item) => item === "all") === -1
              ? where("brand", "in", selectedBrands)
              : null
            : null,
        ),
      );

      const querySnapShot = await getDocs(q);
      const data = querySnapShot.docs.map((doc) => doc.data());
      console.log(data);
      setListProduct([...data]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  return (
    <Example
      brands={setUpForBrandSearching.map((item) => {
        return {
          label: item.label,
          key: item.key,
        };
      })}
      onSubmit={({ rangePrices, selectedBrands }) =>
        handleSumitFunc(rangePrices, selectedBrands)
      }
    >
      <GridContainer spacing={2}>
        {isLoading ? (
          <div className="m-auto">
            <Loading />
          </div>
        ) : listProduct.length ? (
          listProduct.map((product, index) => {
            return (
              <GridItem xs={6} sm={6} md={3} key={index}>
                <Product product={product} index={index} />
              </GridItem>
            );
          })
        ) : (
          <div className="font-semibold">Không tìm thấy kết quả nào</div>
        )}
      </GridContainer>
      {/* <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <Loading />
        ) : listProduct.length ? (
          listProduct.map((product, index) => {
            return (
              <div key={index} className="duration-200">
                <Product product={product} index={index} key={index} />
              </div>
            );
          })
        ) : (
          <div className="font-semibold">Không tìm thấy kết quả nào</div>
        )}
      </div> */}
    </Example>
  );
}
