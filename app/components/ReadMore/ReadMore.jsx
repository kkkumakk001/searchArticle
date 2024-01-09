"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import classes from "./ReadMore.module.scss";

export default function ReadMore({children, height, link}) {
  const readMoreButton = useRef();
  const router = useRouter();
  return (
    <div className={classes.readmore}>
      <input id="readmore" type="checkbox" ref={readMoreButton}></input>
      <label htmlFor="readmore" onClick={() => router.push(link)}>続きを見る</label>
      <div className={classes.readmoreContent} style={{height: height}}>
        { children }
      </div>
    </div>
  );
}
