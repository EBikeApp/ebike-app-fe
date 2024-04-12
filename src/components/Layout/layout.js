import Header from "@/components/header";
import Footer from "@/components/Footer/Footer";
import { useContext } from "react";
import { ProductsCartContext } from "@/store/products-cart-context";

export default function Layout({ children }) {
  const { items } = useContext(ProductsCartContext);
  return (
    <div>
      <Header length={items.length} />
      {children}
      <Footer />
    </div>
  );
}
