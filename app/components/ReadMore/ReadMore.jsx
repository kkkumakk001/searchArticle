"use client";
import { useRef } from "react";
import classes from "./ReadMore.module.scss";

export default function ReadMore({children, height}) {
  const readMoreButton = useRef();
  return (
    <div className={classes.readmore}>
      <input id="readmore" type="checkbox" ref={readMoreButton}></input>
      <label htmlFor="readmore">続きを見る</label>
      <div className={classes.readmoreContent} style={{height: height}}>
        { children }
      </div>
    </div>
  );
}
