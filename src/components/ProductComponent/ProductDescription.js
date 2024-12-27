

import React from "react";

const ProductDescription = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content}}
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    />
  );
};

export default ProductDescription;
