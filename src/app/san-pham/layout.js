"use client";
import Example from "../components/sidebarForFilter";

export default function Layout({ children }) {
  return (
    <div>
      <Example brands={[{ brand: "hih" }, { brand: "deptrai" }]}>
        <div className="w-full m-auto">{children}</div>
      </Example>
    </div>
  );
}
