import PageBreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ListProductsPage from "@/components/ProductComponent/listProducts";
import { useRouter } from "next/router";
import ProductPageLayout from "@/components/ProductLayout/ProductLayout";


export default function ProductPage() {
  const router = useRouter();

  return (
    <ProductPageLayout>
      <PageBreadCrumbs router={router.query.type}/>
      <ListProductsPage
        typeProp={{
          type: router.query.type,
        }}
      />
      </ProductPageLayout>
  );
}
