import dynamic from "next/dynamic";

export default function Layout({ children }) {
  const HeaderComponent = dynamic(() => import("@/app/components/header"), {
    ssr: false,
  });
  return (
    <div>
      <HeaderComponent />
      <div className="w-5/6 m-auto">{children}</div>
    </div>
  );
}
