"use client";
import { useRouter } from "next/navigation";
import style from "./Footer.module.scss";
import Image from "next/image";
import siteLogo from "../../../public/images/siteLogo.jpg"
import xIcon from "../../../public/images/xIcon.png"
import qiitaIcon from "../../../public/images/qiitaIcon.png"
import githubIcon from "../../../public/images/githubIcon.png"
import noteIcon from "../../../public/images/noteIcon.png"
import zennIcon from "../../../public/images/_ zennIcon.png"



export default function FooterComponent() {
const router = useRouter();
  return (
      <footer className={style.footer}>
            <nav className={style.socialIcons}>
                <Image
                    className={style.siteLogo}
                    src={siteLogo}
                    alt="サイトロゴ"
                    height={32}
                    width={32}
                    quality={90}
                    priority={true}
                    onClick={()=>router.push("/")}
                ></Image>
                <ul className={style.socialIcons_ul}>
                    <li className={style.socialIcons_li}><Image
                        className={style.socialIcons_icon}
                            src={xIcon}
                            alt="Xのアイコン"
                            height={24}
                            width={24}
                            quality={90}
                            priority={true}
                            onClick={()=>router.push("#")}
                        ></Image></li>
                        <li className={style.socialIcons_li}><Image
                            className={style.socialIcons_icon}
                                src={githubIcon}
                                alt="githubのアイコン"
                                height={24}
                                width={24}
                                quality={90}
                                priority={true}
                                onClick={()=>router.push("#")}
                            ></Image></li>
                    <li className={style.socialIcons_li}><Image
                        className={style.socialIcons_icon}
                            src={qiitaIcon}
                            alt="Qiitaのアイコン"
                            height={24}
                            width={24}
                            quality={90}
                            priority={true}
                            onClick={()=>router.push("#")}
                        ></Image></li>
                    <li className={style.socialIcons_li}><Image
                        className={style.socialIcons_icon}
                            src={noteIcon}
                            alt="noteのアイコン"
                            height={24}
                            width={24}
                            quality={90}
                            priority={true}
                            onClick={()=>router.push("#")}
                        ></Image></li>
                    <li className={style.socialIcons_li}><Image
                        className={style.socialIcons_icon}
                            src={zennIcon}
                            alt="zennのアイコン"
                            height={24}
                            width={24}
                            quality={90}
                            priority={true}
                            onClick={()=>router.push("#")}
                        ></Image></li>
                </ul>
              <p className={style.siteInfo} onClick={()=>router.push("/about")}>本サイトについて</p>
              <p>&copy; @kkkumakk001(Github)</p>
            </nav>
      </footer>
  )
}