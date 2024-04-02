import { useRouter } from "next/router";

export default function ProductInforPage() {
  const router = useRouter();
  return (
    <div className="mt-44 w-full">
      <h3>type: {router.query.type}</h3>
      <h3>id: {router.query.id}</h3>
    </div>
  );
}
