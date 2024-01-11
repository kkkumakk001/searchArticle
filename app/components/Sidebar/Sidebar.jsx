import React from 'react'
import style from "./Sidebar.module.scss"
import categoryDatas from "../../Datas/categoryDatas"

export default function Sidebar() {
  const { programmingLanguages, framework, other } = categoryDatas();

  return (
    <aside className="sidebar">
        <nav className={style.nav}>
            <ul className={style.nav_ul}>
                <p className={style.nav_ul_title}>プログラミング言語</p>
                {programmingLanguages.map((data, index) => {
                    return (
                        <li className={style.nav_li} key={index}>#{ data.name }</li>
                    )
                })}
            </ul>
            <ul className={style.nav_ul}> 
                <p className={style.nav_ul_title}>フレームワーク</p>
                {framework.map((data, index) => {
                    return (
                        <li className={style.nav_li} key={index}>#{ data.name }</li>
                    )
                })}
            </ul>
            <ul className={style.nav_ul}>
                <p className={style.nav_ul_title}>その他</p>
                {other.map((data, index) => {
                    return (
                        <li className={style.nav_li} key={index}>#{ data.name }</li>
                    )
                })}
            </ul>
        </nav>
    </aside>
  )
}
