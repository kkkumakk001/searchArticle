"use client"
import { useState } from "react";
import Image from "next/image"
import style from "./page.module.scss"
import NoImage from "../../public/images/NoImage.png"
import UserIcon from "../../public/images/userIcon.svg"

export default function Dashboard() {
  const [authInfo, setAuthInfo] = useState(true);
  const logout = () => alert("logout");

  return (
    <div className={style.dashboard_page}>
      <div className={style.dashboard_wrapper}>
        <div className={style.userInformation}>
          <div className={style.userIcon_block}>
            {authInfo ? (
              <Image
                className={style.userIcon}
                src={UserIcon}
                alt="ユーザーアイコン"
                height={200}
                width={200}
                quality={90}
                priority={true}
              ></Image>
            ) : (
              <Image
                className={style.userIcon}
                src={NoImage}
                alt="ユーザーアイコンが見つかりませんでした"
                height={200}
                width={200}
                quality={90}
                priority={true}
              ></Image> 
            )}
          </div>
          <div className={style.userInfo}>
            <p className={style.userName}>UserName</p>
            <p className={style.userId}>@UserId</p>
            <button className={style.logoutButton} onClick={logout}>ログアウト</button>
          </div>
        </div>
        <div className={style.bookmarks}>
          <div className={style.bookmarks_head}>
            <p className={style.bookmarks_title}>ブックマーク</p>
            <div className={style.bookmarks_sort_wrapper}>
              <label className={style.bookmarks_sort_label}>
                <input className={style.bookmarks_sort} type="text" placeholder="検索"/>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}