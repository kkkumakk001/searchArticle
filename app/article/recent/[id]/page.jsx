"use client";
import { useParams } from "next/navigation";
import Articles from "../../../components/Articles/Articles";
import Pagenation from "../../../components/Pagenation/Pagenation"
import SortButton from "../../../components/SortButton/SortButton"


export default function PopularArticle() {
  const params = useParams();
  const pageNumber = Number(params.id);

  return (
    <div>
      <SortButton></SortButton>
      <Articles pageNumber={pageNumber} sort="recent"></Articles>
      <Pagenation></Pagenation>
    </div>
  )
}