"use client";
import { usePathname } from "next/navigation";

export default function About() {
    const pathName = usePathname();

  return (
    <div>
          <p>{pathName}</p>
    </div>
  )
}
