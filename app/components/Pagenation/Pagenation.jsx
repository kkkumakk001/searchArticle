"use client"
import { React, useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useRouter } from "next/navigation";
import Stack from '@mui/material/Stack';
import Articles from '../Articles/Articles';

export default function Pagenation({ paramsId, sort }) {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(paramsId);

  const routerPush = (e) => {
    const num = Number(e.target.textContent);
    router.push(`/article/${sort}/${num}`);
  }

  return (
    <>
    <Articles pageNumber={pageNumber} sort={sort}></Articles>
    <div className="pagenation">
    <Stack spacing={2}>
      <Pagination count={100} page={pageNumber} variant="outlined" shape="rounded" onClick={(e)=>routerPush(e)} hidePrevButton hideNextButton />
    </Stack>
    </div>
    </>
  );
}