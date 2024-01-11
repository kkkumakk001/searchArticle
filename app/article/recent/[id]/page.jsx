"use client";
import { useParams } from "next/navigation";
import Pagenation from "../../../components/Pagenation/Pagenation"
import SortButton from "../../../components/SortButton/SortButton"
import Sidebar from "../../../components/Sidebar/Sidebar"


export default function PopularArticle() {
  const { id } = useParams();
  const paramsId = Number(id);

  return (
    <div className="recent_page">
      <main className="main_content">
          <SortButton></SortButton>
          <Pagenation paramsId={paramsId} sort="recent"></Pagenation>
      </main>
      <Sidebar></Sidebar>
    </div>
  )
}