"use client"
import { useRouter } from "next/navigation";
import style from "./styles/TopPage.module.scss"
import ReadMore from "./components/ReadMore/ReadMore"

export default function Top() {
  const router = useRouter();
  return (
    <main className={style.mainContainer}>
      <h2 className={style.articleNav} onClick={() => router.push("/article/recent/01")}>新着記事</h2>
      <ReadMore style={{marginButtom: "100px"}}></ReadMore>
      <h2 className={style.articleNav} onClick={() => router.push("/article/popular/01")}>人気記事</h2>
      <ReadMore sort="popular"></ReadMore>
    </main>
  );
}