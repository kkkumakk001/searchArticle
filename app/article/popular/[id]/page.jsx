"use client";
import { usePathname } from "next/navigation";

export default function PopularArticle() {
    const pathName = usePathname();

  return (
    <div>
          <p>{pathName}</p>
    </div>
  )
}