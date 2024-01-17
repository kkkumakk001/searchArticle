import { useEffect, useState } from "react";
export default function useFetchArticles({ pageNumber, sort, tag }) {
  const [jsonData, setJsonData] = useState([]);
    
  const fetchArticles = async () => {
    let json = {};
    console.log(pageNumber);
    console.log(sort);
    console.log(tag);
    // const qiitaApiUrl = `https://qiita.com/api/v2/items?page=${pageNumber}&per_page=100`;
    let qiitaApiUrl = "";
    if (tag == "") {
      qiitaApiUrl = `https://qiita.com/api/v2/items?page=${pageNumber}&per_page=40`;
    } else {
      qiitaApiUrl = `https://qiita.com/api/v2/tags/${tag}/items?page=${pageNumber}&per_page=40`
    }

    console.log(qiitaApiUrl)
    
    try {
      const res = await fetch(qiitaApiUrl, {
      headers: {
        Authorization: "Bearer d3ced855b02d6fc773fd235f17375dbc4fa00742",
      },
    });
      json = await res.json();
    if (sort === "popular") {
        json.sort((a, b) => b.likes_count - a.likes_count);
    }
    } catch (e) {
      console.log("エラー", e);
    }
    return json;
    };
  
  useEffect(() => {
    fetchArticles()
      .then((json) => setJsonData(json));
  }, [])

  return { jsonData, setJsonData, fetchArticles };
}