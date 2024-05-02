"use client";

import React, { useState, useEffect } from "react";
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
import Pagination from "@/components/Pagination/Pagination";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  listProductGrid: {
    width: 'calc(100% + 16px)',
    paddingLeft: '15px',
    marginRight: '0px',
  }
});
export default function ListProductsPage({ typeProp }) {
  const [isLoading, setIsLoading] = useState(false);
  const [productsFromDatabase, setProductsFromDatabase] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [sortPrice, setSortPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const classes = useStyle();

  const path = [
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
  ];
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
      setProductsFromDatabase(data);
    });
  }, [type, typeProp]);

  useEffect(() => {
    const discountedPrice = ({ price, discountPercentage }) =>
      discountPercentage ? price - (price * discountPercentage) / 100 : price;
    let sortedList = [...productsFromDatabase];
    if (sortPrice) {
      sortedList.sort((a, b) =>
        sortPrice === "asc"
          ? discountedPrice(a) - discountedPrice(b)
          : discountedPrice(b) - discountedPrice(a),
      );
    }
    if (searchText) {
      sortedList = sortedList.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      );
    }
    if (brand) {
      sortedList = sortedList.filter((item) => item.brand === brand);
    }
    setFilteredData(sortedList);
    if (sortedList.length) {
      const pageSize = sortedList.length / 8;
      const listPage = [{ text: "<", value: "PREV" }];
      for (let i = 1; i < pageSize + 1; i++) {
        listPage.push({ text: i, value: i });
      }
      listPage.push({ text: ">", value: "NEXT" });
      setPages(listPage);
    } else {
      setPages([]);
    }
  }, [productsFromDatabase, searchText, brand, sortPrice]);

  useEffect(() => {
    const start = (currentPage - 1) * 8;
    const end = currentPage * 8;
    setListProduct([...filteredData.slice(start, end)]);
  }, [currentPage, filteredData]);

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

  const onPagination = (value) => {
    if (value === "PREV") {
      setCurrentPage((prev) => prev == 1 ? prev : prev - 1);
    } else if (value === "NEXT") {
      console.log(pages);
      setCurrentPage((prev) => prev == pages.length - 2 ? prev : prev + 1);
    } else {
      setCurrentPage(value);
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
      brand={brand}
      setBrand={setBrand}
      sortPrice={sortPrice}
      setSortPrice={setSortPrice}
      onChangeSearchBy={(e) => setSearchText(e.target.value)}
    >
      <GridContainer spacing={2} className={classes.listProductGrid}>
        {isLoading ? (
          <div className="m-auto">
            <Loading />
          </div>
        ) : filteredData.length ? (
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
        <GridItem xs={12} sm={12} md={12}>
          {pages.length ? (
            <Pagination
              color="info"
              pages={pages.map((item) => ({
                ...item,
                active: item.value === currentPage,
              }))}
              onClick={onPagination}
            />
          ) : null}
        </GridItem>
      </GridContainer>
    </Example>
  );
}
