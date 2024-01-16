"use client";
import { useTagContext } from "../../../../context/TagContext";
import { useParams } from "next/navigation";
import Pagenation from "../../../../components/Pagenation/Pagenation"
import SortButton from "../../../../components/SortButton/SortButton"
import Sidebar from "../../../../components/Sidebar/Sidebar"

export default function RecentCategory() {
  const { id } = useParams();
  const paramsId = Number(id);
  const tag = useTagContext()
  
  return (
    <div className="category_page">
        <main className="main_content">
          <SortButton tag={tag}></SortButton>
          <Pagenation paramsId={paramsId} sort="recent" tag={tag}></Pagenation>
      </main>
      <Sidebar></Sidebar>
    </div>
  )
}