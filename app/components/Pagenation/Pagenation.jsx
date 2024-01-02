"use client"
import { React, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useRouter } from "next/navigation";
import Stack from '@mui/material/Stack';
import Articles from '../Articles/Articles';
// import style from "./PagenationButton.module.scss"

export default function Pagenation({ propspageNumber }) {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(propspageNumber);

  const changeType = (e) => {
    const num = Number(e.target.textContent);
    setPageNumber(num);
    router.push("/article/popular/${pageNumber}")

  }

  return (
    <>
    <Articles pageNumber={pageNumber} sort="popular"></Articles>
    <div className="pagenation">
    <Stack spacing={2}>
      <Pagination count={10} page={pageNumber} variant="outlined" shape="rounded" onClick={(e)=>changeType(e)} hidePrevButton hideNextButton />
    </Stack>
    </div>
    </>
  );
}