'use client'
import { useState, useEffect, useLayoutEffect, useRef } from "react"
import { useRouter } from "next/navigation";
import categoryDatas from "../Datas/categoryDatas";
import style from "./page.module.scss"
import Image from "next/image";
import NoImage from "../../public/images/NoImage.png"
import { useTagUpdateContext } from "../context/TagContext"

export default function CategoryAll() {
    const router = useRouter();
    const { programmingLanguages, framework, other } = categoryDatas();
    const categoryAll = [...programmingLanguages, ...framework, ...other];
    const setTag = useTagUpdateContext();
    const [keyword, setKeyword] = useState("")
    const [filteredDatas, setFilteredDatas] = useState(categoryAll)
    const [size, setSize] = useState(0)
    const [ulRemainder, setUlRemainder] = useState("")
    const ulRef = useRef(null)

    const goTagPage = (data) => {
        setTag(data.name)
        router.push(`/category/${data.name}/popular/1`)
    }

    const categorySort = () => {
        // 配列のソート
        // 画面幅とアイテム数から、ulに付与する擬似要素のwidthを決定する
        const resultRemainder = (r, d) => {
            switch (r.length % d) {
                case 0:
                    console.log(`余り : 0`)
                    setUlRemainder("ul_r0")
                    break;
                case 1:
                    console.log(`余り : 1`)
                    setUlRemainder("ul_r1")
                    break;
                case 2:
                    console.log(`余り : 2`)
                    setUlRemainder("ul_r2")
                    break;
                case 3:
                    console.log(`余り : 3`)
                    setUlRemainder("ul_r3")
                    break;
                case 4:
                    console.log(`余り : 4`)
                    setUlRemainder("ul_r4")
                    break;
                case 5:
                    console.log(`余り : 5`)
                    setUlRemainder("ul_r5")
                    break;
                default:
                    break;
            }
        }

        if (keyword === "") {
            setFilteredDatas(categoryAll);
            console.log(`keywordが入力されてない: ${size}`)
            const result = categoryAll

            if (size >= 960) {
                resultRemainder(result, 6)
            } else if (size >= 768) {
                resultRemainder(result, 4)
            } else if (size >= 480) {
                resultRemainder(result, 3)
            } else {
                resultRemainder(result, 2)
            }

            return;
        }

        const searchKeyword = keyword.trim().toLowerCase().match(/[^\s]+/g);
        
        if (searchKeyword === null) {
            setFilteredDatas(categoryAll);
            console.log(`入力ミスがある: ${size}`)
            const result = categoryAll

            if (size >= 960) {
                resultRemainder(result, 6)
            } else if (size >= 768) {
                resultRemainder(result, 4)
            } else if (size >= 480) {
                resultRemainder(result, 3)
            } else {
                resultRemainder(result, 2)
            }

            return;
        }

        const result = categoryAll.filter((item) =>
            searchKeyword.every((kw) => item.name.toLowerCase().indexOf(kw) !== -1)
        );

        if (result === 0) {
            console.log("一致するタグがありませんでした")
            return
        }

        setFilteredDatas(result.length ? result : ["NotFound Item"]);

        // const resultRemainder = (r, d) => {
        //     switch (r.length % d) {
        //         case 0:
        //             console.log(`余り : 0`)
        //             setUlRemainder("ul_r0")
        //             break;
        //         case 1:
        //             console.log(`余り : 1`)
        //             setUlRemainder("ul_r1")
        //             break;
        //         case 2:
        //             console.log(`余り : 2`)
        //             setUlRemainder("ul_r2")
        //             break;
        //         case 3:
        //             console.log(`余り : 3`)
        //             setUlRemainder("ul_r3")
        //             break;
        //         case 4:
        //             console.log(`余り : 4`)
        //             setUlRemainder("ul_r4")
        //             break;
        //         case 5:
        //             console.log(`余り : 5`)
        //             setUlRemainder("ul_r5")
        //             break;
        //         default:
        //             break;
        //     }
        // }

        if (size >= 960) {
            resultRemainder(result, 6)
        } else if (size >= 768) {
            resultRemainder(result, 4)
        } else if (size >= 480) {
            resultRemainder(result, 3)
        } else {
            resultRemainder(result, 2)
        }
    }

    useEffect(() => {
        setSize(window.innerWidth);
    }, [])

    useEffect(() => {
        categorySort()
    }, [keyword, size, ulRef])

    useLayoutEffect(() => {
        const updateSize = ()=> {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [])

  
  return (
      <div className={style.category_page}>
          <h2 className={style.category_page_title}>カテゴリ一覧</h2>
          <div className={style.category_sort_wrapper}>
              <label className={style.category_sort_label}>
                <input className={style.category_sort} type="text" placeholder="検索" value={keyword} onChange={(e)=> {setKeyword(e.target.value)}} />
              </label>
          </div>
          
          {filteredDatas == "NotFound Item" ? (
              <p className={style.notFound}>アイテムが見つかりませんでした。</p>
          ) : (null)}
          <ul className={`${style.ul} ${style[ulRemainder]}`} ref={ulRef}>
			  {/* ulは常に表示、dataが存在しないときはliを表示しない(dataを参照できなくてエラーが出る) */}
			  	{filteredDatas == "NotFound Item" ? (
					null
			  	) : (
				  filteredDatas.map((data, index) => {
                    return (
                        <li className={style.li} key={index}>
                            <Image
                                src={data.src}
                                onError={(e) => {
                                    e.target.onError = null;
                                    e.target.src = NoImage;
                                }}
                                alt="サイトロゴ"
                                height={50}
                                width={50}
                                quality={90}
                                // priority={true}
                                onClick={() => {goTagPage(data)}}
                            ></Image>
                            <p className={style.li_name}>{ data.name }</p>
                        </li>
                    )
                	})
				)}
            </ul>    
    </div>
  )
}