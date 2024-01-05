"use client";
import { useParams } from "next/navigation";
import Pagenation from "../../../components/Pagenation/Pagenation"
import SortButton from "../../../components/SortButton/SortButton"

export default function PopularArticle() {
  const { id } = useParams();
  const paramsId = Number(id);

  return (
    <div>
      <SortButton></SortButton>
      <Pagenation paramsId={paramsId} sort="recent"></Pagenation>
    </div>
  )
}