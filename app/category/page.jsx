'use client'
import categoryDatas from "../Datas/categoryDatas";
import style from "./page.module.scss"
import Image from "next/image";

export default function CategoryAll() {
  const { programmingLanguages, framework, other } = categoryDatas();
  const categoryAll = [...programmingLanguages, ...framework, ...other];
  
  return (
      <div className={style.category_page}>
        <h2 className={style.category_page_title}>カテゴリ一覧</h2>
        <ul className={style.ul}>
            {categoryAll.map((data, index) => {
                return (
                    <li className={style.li} key={index}>
                        <Image
                            // className={style.siteLogo}
                            src={data.src}
                            alt="サイトロゴ"
                            height={50}
                            width={50}
                            quality={90}
                            priority={true}
                            // onClick={()=>router.push("/")}
                        ></Image>
                        <p className={style.li_name}>{ data.name }</p>    
                    </li>
                )
            })}   
        </ul>    
    </div>
  )
}