"use client";
import { useParams, usePathname } from "next/navigation";
import Articles from "../../../components/Articles/Articles";

export default function PopularArticle() {
  const pathName = usePathname();
  const params = useParams();
  const pageNumber = Number(params.id);

  return (
    <div>
      <p>{pathName}</p>
      <Articles pageNumber={pageNumber}></Articles>
    </div>
  )
}