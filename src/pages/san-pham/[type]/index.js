import PageBreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ListProductsPage from "@/components/ProductComponent/listProducts";
import { useRouter } from "next/router";
import ProductPageLayout from "@/components/ProductLayout/ProductLayout";


export default function ProductPage() {
  const router = useRouter();

  return (
    <ProductPageLayout>
      <PageBreadCrumbs router={router.query.type} />
      <div className="w-full overflow-hidden">
        <ListProductsPage
          typeProp={{
            type: router.query.type,
          }}
        />
      </div>
    </ProductPageLayout>
  );
}
