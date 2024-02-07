// "use client"

import React from 'react'
import { useRouter } from "next/navigation"
import { useTagUpdateContext } from "../../context/TagContext"
import style from "./Sidebar.module.scss"
import categoryDatas from "../../Datas/categoryDatas"

export default function Sidebar() {
  const setTag = useTagUpdateContext()
  const router = useRouter()
  const { programmingLanguages, framework, other } = categoryDatas();
  const goTagPage = (data) => {
        const tagName = data.name
        setTag(tagName);
        router.push(`/category/${data.name}/popular/01`)
    }
    
  return (
    <aside className="sidebar">
        <nav className={style.nav}>
            <ul className={style.nav_ul}>
                <p className={style.nav_ul_title}>プログラミング言語</p>
                {programmingLanguages.map((data, index) => {
                    return (
                        <li className={style.nav_li} key={index} onClick={() => {goTagPage(data)}}>#{ data.name }</li>
                    )
                })}
            </ul>
            <ul className={style.nav_ul}> 
                <p className={style.nav_ul_title}>フレームワーク</p>
                {framework.map((data, index) => {
                    return (
                        <li className={style.nav_li} key={index} onClick={() => {goTagPage(data)}}>#{ data.name }</li>
                    )
                })}
            </ul>
            <ul className={style.nav_ul}>
                <p className={style.nav_ul_title}>その他</p>
                {other.map((data, index) => {
                    return (
                        <li className={style.nav_li} key={index} onClick={() => {goTagPage(data)}}>#{ data.name }</li>
                    )
                })}
            </ul>
        </nav>
    </aside>
  )
}
