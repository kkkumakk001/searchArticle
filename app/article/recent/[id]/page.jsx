"use client";
import { usePathname } from "next/navigation";

export default function RecentArticle() {
    const pathName = usePathname();

  return (
    <div>
          <p>{pathName}</p>
    </div>
  )
}