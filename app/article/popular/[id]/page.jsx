"use client";
import { useParams, usePathname } from "next/navigation";
import Articles from "../../../components/Articles/Articles";
import PagenationButton from "../../../components/PagenationButton/Pagenation"

export default function PopularArticle() {
  const pathName = usePathname();
  const params = useParams();
  const pageNumber = Number(params.id);

  return (
    <div>
      <p>{pathName}</p>
      <Articles pageNumber={pageNumber} sort="popular"></Articles>
      <PagenationButton></PagenationButton>
    </div>
  )
}