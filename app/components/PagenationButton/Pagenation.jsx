"use client"
import { React, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PagenationButton() {
  const [pageNumber, setPageNumber] = useState(1);

  const changeType = (e) => {
    const num = Number(e.target.textContent);
    setPageNumber(num);
    console.log(pageNumber);
  }

  return (
    <div class="pagenation">
      <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" onClick={(e)=>changeType(e)} hidePrevButton hideNextButton />
    </Stack>
    </div>
  );
}