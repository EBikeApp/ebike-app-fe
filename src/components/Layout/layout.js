import Header from "@/components/header";
import Footer from "@/components/Footer/Footer";
import { useContext } from "react";
import { ProductsCartContext } from "@/store/products-cart-context";
import ButtonForContactUs from "../ButtonForContact/Button";

export default function Layout({ children }) {
  const { items } = useContext(ProductsCartContext);
  return (
    <div className="">
      <Header length={items.length} />
      {children}
      <Footer />
      <div className="fixed bottom-9 left-2 z-20">
        <ButtonForContactUs />
      </div>
    </div>
  );
}
