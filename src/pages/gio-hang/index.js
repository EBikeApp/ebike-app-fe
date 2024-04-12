import CartComponent from "@/components/Cart/CartComponent";
import { StrictMode } from "react";

export default function CartPage() {
  return (
    <div className="mt-20">
      <StrictMode enabled={false}>
        <CartComponent />
      </StrictMode>
    </div>
  );
}
