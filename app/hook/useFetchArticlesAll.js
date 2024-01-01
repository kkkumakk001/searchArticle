import { useEffect, useState } from "react";

export default function useFetchArticles(pageNumber, sort) {
  const [articles, setArticles] = useState([]);
  const qiitaApiUrl = `https://qiita.com/api/v2/items?page=${pageNumber}&per_page=100`;
    console.log(qiitaApiUrl);
    console.log(sort);

  const fetchArticles = async () => {
    try {
      const res = await fetch(qiitaApiUrl, {
        headers: {
          Authorization: "Bearer d3ced855b02d6fc773fd235f17375dbc4fa00742",
        },
      });
      const json = await res.json();
      if (sort === "popular") {
          json.sort((a, b) => b.likes_count - a.likes_count);
      }
        setArticles(json);
    //   console.log(json);
    } catch (e) {
      console.log("エラー", e);
    } 
  };

  useEffect(() => {
      fetchArticles();
  }, []);

  return { articles, fetchArticles };
}