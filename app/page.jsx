"use client"
import { useRouter } from "next/navigation";
import style from "./styles/TopPage.module.scss"
import ReadMore from "./components/ReadMore/ReadMore"
import Categorys from "./components/Categorys/Category"
import Articles from "./components/Articles/Articles";

export default function Top() {
  const router = useRouter();

  return (
    <main className={style.mainContainer}>
      <h2 className={style.articleNav}>新着記事</h2>
      <ReadMore height="800px" link="/article/recent/01"><Articles sort="recent"></Articles></ReadMore>
      <h2 className={style.articleNav}>人気記事</h2>
      <ReadMore height="800px" link="/article/popular/01"><Articles sort="popular"></Articles></ReadMore>
      <h2 className={style.articleNav} onClick={() => router.push("/category")}>カテゴリ一覧</h2>
      <ReadMore height="300px"><Categorys></Categorys></ReadMore>
    </main>
  );
}