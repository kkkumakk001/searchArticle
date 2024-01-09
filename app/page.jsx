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
      <h2 className={style.articleNav} onClick={() => router.push("/article/recent/01")}>新着記事</h2>
      <ReadMore height="600px"><Articles sort="recent"></Articles></ReadMore>
      <h2 className={style.articleNav} onClick={() => router.push("/article/popular/01")}>人気記事</h2>
      <ReadMore height="600px"><Articles sort="popular"></Articles></ReadMore>
      <h2 className={style.articleNav} onClick={() => router.push("/category")}>人気記事</h2>
      <ReadMore height="400px"><Categorys></Categorys></ReadMore>
    </main>
  );
}