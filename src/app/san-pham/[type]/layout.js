import { Suspense } from "react";
import Loading from "./loading";

export default function ProductLayout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full m-auto">{children}</div>
    </Suspense>
  );
}
