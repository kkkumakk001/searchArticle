// "use client";
import { useRouter, usePathname } from "next/navigation";
import style from "./SortButton.module.scss";

export default function SortButton({ tag = "" }) {
  const router = useRouter();
  const pathname = usePathname();

  const transitionRecent = () => {
    if (pathname.includes("category")) {
      router.push(`/category/${tag}/recent/01`)
    }
    if (pathname.includes("article")) {
      router.push("/article/recent/01")
    }
  };

  const transitionPopular = () => {
    if (pathname.includes("category")) {
      router.push(`/category/${tag}/popular/01`)
    }
    if (pathname.includes("article")) {
      router.push("/article/popular/01")
    }
  };

  return (
    <div className={style.buttonSection}>
      <div className={style.buttonWrapper}>
        <button
          className={`${style.button} ${pathname.includes("recent") ? style.currentButton : style.nonCurrentButton}`}
          onClick={transitionRecent}>
          新着記事
        </button>
        <button
          className={`${style.button} ${pathname.includes("popular") ? style.currentButton : style.nonCurrentButton}`}
          onClick={transitionPopular}>人気記事</button>
      </div>
    </div>
  );
}