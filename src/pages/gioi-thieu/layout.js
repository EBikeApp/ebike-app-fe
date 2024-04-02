import { Suspense } from "react";
import Loading from "../../app/san-pham/[type]/loading";
import "../globals.css";
import "@/styles/scss/nextjs-material-kit.scss?v=1.2.0";
export default function Layout({ children }) {
  // <html lang="en">
  //   <body className={inter.className}>
  //       <div className="bg-white">
  //         <ProductsCartProvider>
  //           <div className="min-h-[1000px]">
  //             <UpCircleOutlined className="text-3xl fixed top-1" />
  //             {children}
  //           </div>
  //           <Footer />
  //         </ProductsCartProvider>
  //       </div>
  //   </body>
  // </html>

  return (
    <Suspense fallback={<Loading />}>
      <div>{children}</div>;
    </Suspense>
  );
}
