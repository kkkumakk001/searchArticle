"use client";
import { useState, Suspense } from "react";
import { usePathname } from "next/navigation";
import cls from "./Articles.module.scss";
import useFetchArticles from "../../hook/useFetchArticles";

export default function Articles({pageNumber=1}) {
  const [tagId, setTagId] = useState("react");
    const { articles } = useFetchArticles(pageNumber);
  const pathName = usePathname();
    

  const changeTagid = (e) => {
    setTagId(e.target.innerText);
  };

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <section className={cls.blog_wrap}>
        <h1 className="section_title">{pathName}</h1>
        {/* <p className={cls.tagId}>'{tagId}'で検索</p> */}
        <ul className={cls.card_ul}>
          {articles.map((data, index) => {
            return (
              <li className={cls.card} key={index}>
                <div className={cls.card_header}>
                  <div className={cls.userInfo_01}>
                    <img
                      className={cls.userIcon}
                      src={data.user.profile_image_url}
                      alt="ユーザーアイコン"
                    />
                  </div>
                  <div className={cls.userInfo_02}>
                    <p className={cls.userId}>@{data.user.github_login_name}</p>
                    <span className={cls.updatedAt}>{data.updated_at}</span>
                  </div>
                </div>
                <a
                  className={cls.linkUrl}
                  key={index}
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={cls.card_body}>
                    <p className={cls.card_title}>{data.title}</p>
                  </div>
                </a>
                <div className={cls.card_footer}>
                  {data.tags.map((tag, index) => {
                    return (
                      <span
                        className={cls.card_tag}
                        onClick={changeTagid}
                        key={index}
                      >
                        {tag.name}
                      </span>
                    );
                  })}
                </div>
                <p>likes_count: {data.likes_count}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </Suspense>
  );
}