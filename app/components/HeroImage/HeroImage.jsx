import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Hero from "../../../public/images/HeroImage.svg"
import style from "./HeroImage.module.scss"


export default function HeroImage() {
  const router = useRouter();
  const [authInfo, setAuthInfo] = useState(false);

  return (
      <div className={style.hero_section}>
        <Image
            className={style.hero_image}
            src={Hero}
            alt="ヒーローイメージ"
            height={400}
            width={400}
            quality={90}
            priority={true}
        ></Image>
          <div className={style.hero_desc_wrapper}>
              <span className={style.hero_title}>
                <p>記事検索サイト</p>  
                <p>メモもできる</p>
              </span>
              <span className={style.hero_desc}>
                  <p>ブックマークやメモを残して復習に。</p>
                  <p>タグ検索で探す時間を短縮。</p>
              </span>
              {authInfo ? null : (<button className={style.login_button}>ログイン</button>)}
        </div>  
    </div>
  )
}
