import style from "./page.module.scss"

export default function About() {

    const datas = [
      {
        mainTitle: "記事検索",
        subTitle: "Search-Article",
        text: "トレンドや新着の記事、タグ検索、任意のワード検索など基本的な機能を用意しています。"
      },
      {
        mainTitle: "ブックマーク",
        subTitle: "Bookmark & Memo",
        text: "ブックマーク機能だけではなく、同時にメモも記しておくことで振り返りが楽に。"
      },
      {
        mainTitle: "絞り込み",
        subTitle: "Sort",
        text: "ブックマークが増えてもすぐに探している記事が見つかるように、タグでの絞り込みができるようにしました。"
      }
    ];

  return (
    <div className={style.about_page} style={{paddingTop: "150px"}}>
          <ul className={style.ul}>
              {datas.map((data, index) => {
                return (
                <li className={style.li} key={index}>
                    <div className={style.li_content}>
                      <div className={style.li_title}>
                        <div className={style.li_number}><span>{`0${index + 1}`}</span></div> 
                        <div className={style.li_titleText}>
                            <p className={style.li_titleText_main}>{data.mainTitle}</p>   
                            <p className={style.li_titleText_sub}>{data.subTitle}</p>   
                        </div> 
                      </div>
                      <div className={style.li_text}>
                        <p>{data.text}</p>
                      </div>
                    </div>
                    <div className={style.li_img}></div>    
                </li>
                )
              })}
        </ul>
    </div>
  )
}
