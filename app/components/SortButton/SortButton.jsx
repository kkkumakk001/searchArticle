"use client";
import { useRouter } from "next/navigation";

export default function SortButton() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/article/recent/01")}>新着順</button>
      <button onClick={() => router.push("/article/popular/01")}>人気順</button>
    </div>
  );
}