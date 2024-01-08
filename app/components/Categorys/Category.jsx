import Image from "next/image";
import categoryDatas from "../../Datas/categoryDatas";
import style from "./Category.module.scss";

export default function Categorys() {
  const { programmingLanguages, framework, other } = categoryDatas();
  return (
    <div className={style.category_wrapper}>
        <ul className={style.ul}>
            {framework.map((data, index) => {
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
