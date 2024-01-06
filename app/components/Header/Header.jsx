"use client";
import { useRouter } from "next/navigation";
import style from "./Header.module.scss";
import Image from "next/image";
import siteLogo from "../../../public/images/siteLogo.jpg"


export default function HeaderComponent() {
    const router = useRouter();
  return (
        <header>
            <nav>
              <Image
                  src={siteLogo}
                  alt="サイトロゴ"
                  height={32}
                  width={32}
                  quality={90}
                  priority={true}
                  onClick={()=>router.push("/")}
              ></Image>
                <ul>
                    <li className={style.listItem} onClick={()=>router.push("/")}>Home</li>
                    <li className={style.listItem} onClick={()=>router.push("/about")}>About</li>
                    <li className={style.listItem} onClick={()=>router.push("/category")}>Category</li>
                    <li className={style.listItem} onClick={()=>router.push("/article/popular/01")}>Article/Popular</li>
                    <li className={style.listItem} onClick={()=>router.push("/article/recent/01")}>Article/Recent</li>
                    <li className={style.listItem} onClick={()=>router.push("/dashboard/bookmark")}>Dashboard/Bookmark</li>
                </ul>
            </nav>
        </header>
  )
}
