"use client";
import React, { useState } from "react";
import "../globals.css";
function Header() {
  const [title] = useState("My App Header");


  return (
    <header>
      <h1 className="">{title}</h1>
    </header>
  );
}

export default Header;

