import ListProductsPage from "@/components/ProductComponent/listProducts";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProductPage() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.type);
  });
  return (
    <div>
      <ListProductsPage
        typeProp={{
          type: router.query.type,
        }}
      />
    </div>
  );
}
