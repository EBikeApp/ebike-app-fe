import { Spin } from "antd";

export default function Loading() {
  return (
    <div className="text-center h-full mt-32 bg-white">
      <Spin className="text-center p-7 m-7" />
    </div>
  );
}
