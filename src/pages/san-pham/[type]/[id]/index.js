import ProductDetail from "@/components/ProductComponent/productDetail";
import { useRouter } from "next/router";

export default function ProductInforPage() {
  const router = useRouter();
  return (
    <div className="mt-20 w-full">
      <ProductDetail productId={router.query.id} />
    </div>
  );
}
