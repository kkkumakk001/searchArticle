import { useEffect, useState } from "react";

export default function useFetchArticlesTag(pageNumber, sort, tag) {
  const [jsonData, setJsonData] = useState([]);
    
    const fetchArticles = async () => {
      const qiitaApiUrl = `https://qiita.com/api/v2/tags/${tag}/items?page=${pageNumber}&per_page=100`;
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
        setJsonData(json);
    } catch (e) {
      console.log("エラー", e);
    }
    };
  
  useEffect(() => {
    fetchArticles();
  }, [])


  return { jsonData, fetchArticles };
}