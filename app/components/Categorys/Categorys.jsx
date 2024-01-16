"use client"

import { useTagUpdateContext } from "../../context/TagContext"
import Image from "next/image";
import { useRouter } from "next/navigation"
import categoryDatas from "../../Datas/categoryDatas";
import style from "./Category.module.scss";

export default function Categorys() {
  const setTag = useTagUpdateContext()
    const { programmingLanguages } = categoryDatas();
    const router = useRouter()
    const goTagPage = (data) => {
        const tagName = data.name
        setTag(tagName);
        router.push(`/category/${data.name}/popular/01`)
    }
  return (
      <div className={style.category_wrapper}>  
        <ul className={style.ul}>
            {programmingLanguages.map((data, index) => {
                return (
                    <li className={style.li} key={index} onClick={() => {goTagPage(data)}}>
                        <Image
                            src={data.src}
                            alt="サイトロゴ"
                            height={50}
                            width={50}
                            quality={90}
                            priority={true}
                        ></Image>
                        <p className={style.li_name}>{ data.name }</p>    
                    </li>
                )
            })}   
        </ul>
    </div>
  )
}
