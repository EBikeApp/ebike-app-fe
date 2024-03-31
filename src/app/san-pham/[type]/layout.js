import { Suspense } from "react";
import Loading from "./loading";

export default function ProductLayout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-5/6 m-auto">{children}</div>
    </Suspense>
  );
}
