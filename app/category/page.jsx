'use client'
import { useRouter } from "next/navigation";
import categoryDatas from "../Datas/categoryDatas";
import style from "./page.module.scss"
import Image from "next/image";
import { useTagUpdateContext } from "../context/TagContext"

export default function CategoryAll() {
    const setAuth = useTagUpdateContext();
    const router = useRouter();
    const { programmingLanguages, framework, other } = categoryDatas();
    const categoryAll = [...programmingLanguages, ...framework, ...other];
    const goTagPAge = (data) => {
        setAuth(data.name)
        router.push(`/category/${data.name}/popular/1`)
    }
  
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
                            onClick={() => {goTagPAge(data)}}
                            // onClick={`/category/dammy/popular/1`}
                            // onClick={router.push(`/category/fail/popular/1`)}
                        ></Image>
                        <p className={style.li_name}>{ data.name }</p>    
                    </li>
                )
            })}   
        </ul>    
    </div>
  )
}