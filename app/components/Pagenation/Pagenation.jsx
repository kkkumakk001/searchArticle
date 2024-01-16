"use client"
import { React, useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { useRouter } from "next/navigation";
import Stack from '@mui/material/Stack';
import style from "./Pagenation.module.scss";
import Articles from '../Articles/Articles';

export default function Pagenation({ paramsId, sort, tag }) {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(paramsId);
  console.log(tag)

  const routerPush = (e) => {
    const num = Number(e.target.textContent);
    if (tag == "") {
      router.push(`/article/${sort}/${num}`);
    } else {
      router.push(`/category/${tag}/${sort}/${num}`);
    }
  }

  return (
    <section className="pagenation">
      <div className={style.container}>
        <Articles pageNumber={pageNumber} sort={sort} tag={tag}></Articles>
        <span className={style.pagenation_button}>
          <Stack spacing={2}>
            <Pagination count={100} page={pageNumber} variant="outlined" shape="rounded" onClick={(e)=>routerPush(e)} hidePrevButton hideNextButton />
          </Stack>
        </span>
      </div>
    </section>
  );
}