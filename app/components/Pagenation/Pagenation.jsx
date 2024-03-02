"use client"
import { React } from 'react';
import Pagination from '@mui/material/Pagination';
import { useRouter } from "next/navigation";
import Stack from '@mui/material/Stack';
import style from "./Pagenation.module.scss";
import Articles from '../Articles/Articles';


export default function Pagenation({ paramsId, sort, tag }) {
  const router = useRouter();
  const pageNumber = paramsId;

  const routerPush = (e) => {
    const num = Number(e.target.textContent);
    if (tag == "") {
      router.push(`/article/${sort}/${num}`, { scroll: false });
    } else {
      router.push(`/category/${tag}/${sort}/${num}`, { scroll: false });
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