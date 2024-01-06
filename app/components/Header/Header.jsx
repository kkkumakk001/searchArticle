"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./Header.module.scss";
import Image from "next/image";
import siteLogo from "../../../public/images/siteLogo.jpg"
import searchIcon from "../../../public/images/searchIcon.png"
import userIcon from "../../../public/images/userIcon.png"


export default function HeaderComponent() {
  const router = useRouter();
  const [authInfo, setAuthInfo] = useState(false);
  return (
        <header className={style.header}>
            <nav className={style.nav}>
              <Image
                  src={siteLogo}
                  alt="サイトロゴ"
                  height={32}
                  width={32}
                  quality={90}
                  priority={true}
                  onClick={()=>router.push("/")}
              ></Image>
              <span className={style.header_info}>
              <Image
                  className={style.searchIcon}
                  src={searchIcon}
                  alt="検索アイコン"
                  height={24}
                  width={24}
                  quality={90}
                  priority={true}
                  onClick={()=>router.push("/category")}
              ></Image>
              {authInfo ? (
                <Image
                  src={userIcon}
                  alt="ユーザーアイコン"
                  height={32}
                  width={32}
                  quality={90}
                  priority={true}
                  onClick={()=>router.push("/dashboard")}
              ></Image>
              ) : (<button className={style.loginButton}>ログイン</button>)
              }
              </span>
              
                {/* <ul>
                //     <li className={style.listItem} onClick={()=>router.push("/")}>Home</li>
                //     <li className={style.listItem} onClick={()=>router.push("/about")}>About</li>
                //     <li className={style.listItem} onClick={()=>router.push("/category")}>Category</li>
                //     <li className={style.listItem} onClick={()=>router.push("/article/popular/01")}>Article/Popular</li>
                //     <li className={style.listItem} onClick={()=>router.push("/article/recent/01")}>Article/Recent</li>
                //     <li className={style.listItem} onClick={()=>router.push("/dashboard/bookmark")}>Dashboard/Bookmark</li>
                </ul> */}
            </nav>
        </header>
  )
}
