"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Dropdown, Slider, Pagination, Button, Space, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Product from "../Product";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../config/firebase/firebase";
import { Breadcrumb } from "antd";
import SidebarForFilter from "@/app/components/sidebarForFilter";

export default function ListProductsPage({ typeProp }) {
  const [productsFromDatabase, setProductsFromDatabase] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [priceFilter, setPriceFilter] = useState([0, 100]);
  const [selectedType, setSelectedType] = useState({
    label: "Tất cả",
    key: "all",
  });

  const [pageNumber, setPageNumber] = useState(1);

  const [selectedAscOrDesc, setSelectedAscOrDesc] = useState({
    label: "Giá",
    key: "default",
  });
  const [scopeProducts, setScopeProducts] = useState({
    start: 0,
    end: 10,
  });

  const [brand, setBrand] = useState("ASAMA");
  const [rangePrice, setRangePrice] = useState([0, 100]);

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
    setType(path.find((item) => item.label === typeProp.type).type);
    const getAllDocsFromDatabase = async (type) => {
      // setIsLoading(true);
      const q = query(collection(db, "products"), where("type", "==", type));
      const querySnapShot = await getDocs(q);
      const data = querySnapShot.docs.map((doc) => doc.data());
      return data;
    };
    // this is the first time the component is mounted
    getAllDocsFromDatabase(type).then((data) => {
      // setIsLoading(false);
      setProductsFromDatabase(data);
      setListProduct([...data.slice(0, 10)]);
      setPageNumber(1);
      setPriceFilter([0, 100]);
      setSelectedType({
        label: "Tất cả",
        key: "all",
      });
    });
  }, [type, typeProp]);

  // haven't done yet
  const onPagination = (pageNumber, pageSize) => {
    setPageNumber(pageNumber);
    if (pageNumber * 10 > productsFromDatabase.length) {
      setScopeProducts({
        start: (pageNumber - 1) * 10,
        end: productsFromDatabase.length,
      });
    } else {
      setScopeProducts({
        start: (pageNumber - 1) * 10,
        end: pageNumber * 10,
      });
    }

    setListProduct([
      ...productsFromDatabase.slice(scopeProducts.start, scopeProducts.end + 1),
    ]);
  };

  const handleMenuClickForBrandSearching = useCallback((e) => {
    const selected = items.find((item) => item.key === e.key);

    if (selected) {
      setSelectedType(selected);
    }
    if (selected.key === "all") {
      setPriceFilter([0, 100]);
      setListProduct([...productsFromDatabase]);
    } else {
      const filterProducts = productsFromDatabase.filter(
        (product) => product.brand === selected.key,
      );
      setPriceFilter([0, 100]);
      setListProduct([...filterProducts]);
    }
  });

  const onSliderChange = (value) => {
    if (value[0] === 0) {
      setListProduct([
        ...productsFromDatabase.slice(
          scopeProducts.start,
          scopeProducts.end + 1,
        ),
      ]);
    } else {
      const currentListProduct = listProduct.filter(
        (product) =>
          product.price <= value[1] * 1000000 &&
          product.price >= value[0] * 1000000,
      );
      setListProduct([...currentListProduct]);
    }
  };

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
    });

  const items = setUpForBrandSearching.filter((item, index, self) => {
    return index === self.findIndex((t) => t.key === item.key);
  });

  const menuProps = {
    items,
    onClick: handleMenuClickForBrandSearching,
  };

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

  const sliderMarks = useMemo(
    () => ({
      [priceFilter[0]]: `${priceFilter[0]}triệu`,
      [priceFilter[1]]: `${priceFilter[1]}triệu`,
    }),
    [priceFilter],
  );

  const getData = async () => {
    try {
      const q = query(
        collection(db, "products"),
        where("type", "==", type),
        brand === "all" ? null : where("brand", "==", brand),
        limit(10),
      );
      const querySnapShot = await getDocs(q);

      const data = querySnapShot.docs.map((doc) => doc.data());
      return data;
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  useEffect(() => {
    getData().then((data) => console.log(data));
  });

  return (
    <div className="product-page-content">
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
        <Breadcrumb.Item>Xe đạp</Breadcrumb.Item>
      </Breadcrumb>
      <div className="filter-criteria">
        <div className="flex flex-wrap justify-between gap-4 ">
          <Dropdown menu={menuProps} className="mx-4">
            <Button>
              <Space>
                {selectedType.label} <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown menu={ascOrDescProps} className="mx-4">
            <Button>
              <Space>
                {selectedAscOrDesc.label} <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Slider
            min={0}
            max={100}
            onChange={(value) => {
              onSliderChange(value);
            }}
            marks={sliderMarks}
            step={2}
            range
            defaultValue={[0, 100]}
            className="w-full md:w-1/4 mx-4"
          />
          <div className="flex justify-center self-center sm:flex-col ">
            <SidebarForFilter />
            <Input.Search
              className="w-full md:w-1/4 mx-3"
              placeholder="Nhập tên sản phẩm..."
              onSearch={onSearch}
              onChange={(e) => {
                if (e.target.value === "") {
                  setListProduct([...productsFromDatabase]);
                }
              }}
            />
          </div>
        </div>
        <br />
        <div className="flex flex-wrap justify-center">
          {!productsFromDatabase.length ? (
            <div className="text-center">
              <p>Không có sản phẩm nào</p>
            </div>
          ) : (
            listProduct.map((product, index) => {
              return (
                <div key={index} className="duration-200">
                  <Product product={product} index={index} key={index} />
                </div>
              );
            })
          )}
        </div>
        <br />
        <div className="text-center">
          <Pagination
            defaultCurrent={1}
            pageSize={
              productsFromDatabase.length % 10 === 0
                ? productsFromDatabase.length / 10
                : Math.floor(productsFromDatabase.length / 10) + 1
            }
            current={pageNumber}
            total={productsFromDatabase.length}
            onChange={onPagination}
          />
        </div>
      </div>
    </div>
  );
}
