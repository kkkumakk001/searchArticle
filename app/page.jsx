"use client"
import style from "./styles/TopPage.module.scss"
import ReadMore from "./components/ReadMore/ReadMore"
import Categorys from "./components/Categorys/Categorys"
import Articles from "./components/Articles/Articles";
import HeroImage from "./components/HeroImage/HeroImage"

export default function Top() {

  return (
    <main className={style.mainContainer}>
      <HeroImage></HeroImage>
      <h2 className={style.articleNav}>新着記事</h2>
      <ReadMore height="800px" link="/article/recent/01"><Articles sort="recent"></Articles></ReadMore>
      <h2 className={style.articleNav}>人気記事</h2>
      <ReadMore height="800px" link="/article/popular/01"><Articles sort="popular"></Articles></ReadMore>
      <h2 className={style.articleNav}>カテゴリ一覧</h2>
      <ReadMore height="300px" link="/category"><Categorys></Categorys></ReadMore>
    </main>
  );
}