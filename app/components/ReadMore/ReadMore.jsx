"use client";

import { useRef } from "react";
import classes from "./ReadMore.module.scss";
import Articles from "../Articles/Articles"

// export default function ReadMore({sort}) {
export default function ReadMore({children}) {
  const readMoreButton = useRef();
  return (
    <div className={classes.readmore}>
      <input id="readmore" type="checkbox" ref={readMoreButton}></input>
      <label htmlFor="readmore">続きを見る</label>
          <div className={classes.readmoreContent}>
        {/* <Articles sort={sort}></Articles> */}
            { children }
          </div>
    </div>
  );
}
