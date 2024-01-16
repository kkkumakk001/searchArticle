"use client";
import { useAuthContext } from "../../context/TagContext";
// import { useState } from "react";
import Link from 'next/link'
import style from "./Header.module.scss";
import Image from "next/image";
import siteLogo from "../../../public/images/siteLogo.jpg"
import searchIcon from "../../../public/images/searchIcon.png"
import userIcon from "../../../public/images/userIcon.png"


export default function HeaderComponent() {
  const { auth } = useAuthContext()
  return (
        <header className={style.header}>
            <nav className={style.nav}>
              <Link href="/">
                <Image
                        src={siteLogo}
                        alt="サイトロゴ"
                        height={32}
                        width={32}
                        quality={90}
                        priority={true}
                    ></Image>
              </Link>
              <span className={style.header_info}>
          <Link href="/category">
            <Image
                  className={style.searchIcon}
                  src={searchIcon}
                  alt="検索アイコン"
                  height={24}
                  width={24}
                  quality={90}
                  priority={true}
              ></Image>
              </Link>
              <Link href="/dashboard">
              {auth ? (
              <Image
                  src={userIcon}
                  alt="ユーザーアイコン"
                  height={32}
                  width={32}
                  quality={90}
                  priority={true}
              ></Image>
              ) : (<button className={style.loginButton}>ログイン</button>)
            }
            </Link>
              </span>
            </nav>
        </header>
  )
}
