// "use client";
import { useTagUpdateContext } from "../../context/TagContext"
// import { Suspense } from "react";
import { useRouter } from "next/navigation";
import cls from "./Articles.module.scss";
import useFetchArticles from "../../hook/useFetchArticlesAll";

export default function Articles({ pageNumber = 1, sort = "", tag="" }) {
  const setTag = useTagUpdateContext()
  const router = useRouter();
  const { jsonData } = useFetchArticles({ pageNumber, sort, tag });

  const changeTagid = (e) => {
    const tagName = e.target.innerText
    setTag(tagName);
    router.push(`/category/${tagName}/popular/01`);
  };

  return (
    // <Suspense fallback={<p>Loading feed...</p>}>
    <>  
      <section className={cls.blog_wrap}>
        {tag ? (
          <p className={cls.tagId}>'{tag}'で検索</p>
        ) : (
          null
        )}
        <ul className={cls.card_ul}>
          {jsonData.map((data, index) => {
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
              </li>
            );
          })}
        </ul>
      </section>
    </>  
    // </Suspense>
  );
}