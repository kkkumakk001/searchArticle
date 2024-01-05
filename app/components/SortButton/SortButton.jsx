"use client";
import { useRouter, usePathname } from "next/navigation";
import style from "./SortButton.module.scss";

export default function SortButton() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section className={style.buttonSection}>
      <div className={style.buttonWrapper}>
        <button
          className={`${style.button} ${pathname.includes("recent") ? style.currentButton : style.nonCurrentButton}`}
          onClick={() => router.push("/article/recent/01")}>
          新着記事
        </button>
        <button
          className={`${style.button} ${pathname.includes("popular") ? style.currentButton : style.nonCurrentButton}`}
          onClick={() => router.push("/article/popular/01")}>人気記事</button>
      </div>
    </section>
  );
}