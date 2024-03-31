import { Suspense } from "react";
import Loading from "./[type]/loading";

export default function Layout({ children }) {
  return (
  
    <Suspense fallback={<Loading />}>
      <div className="w-5/6 m-auto">{children}</div>;
    </Suspense>
  );
}
