import { useEffect, useState } from "react";
export default function useFetchArticles({ pageNumber, sort, tag }) {
  const [jsonData, setJsonData] = useState([]);
    
  const fetchArticles = async () => {
    let json = [];
    let qiitaApiUrl = "";

    if (tag == "") {
      qiitaApiUrl = `https://qiita.com/api/v2/items?page=${pageNumber}&per_page=40`;
    } else {
      qiitaApiUrl = `https://qiita.com/api/v2/tags/${tag}/items?page=${pageNumber}&per_page=40`
    }
    
    try {
      const res = await fetch(qiitaApiUrl, {
        next: {revalidate: 60 },
        headers: {
          Authorization: "Bearer d3ced855b02d6fc773fd235f17375dbc4fa00742",
        }
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

    return { jsonData };
}


// import { useEffect, useState } from "react";
// export default async function useFetchArticles({ pageNumber, sort, tag }) {
    
//   const fetchArticles = async() => {
//     let json = [];
//     let qiitaApiUrl = "";

//     if (tag == "") {
//       qiitaApiUrl = `https://qiita.com/api/v2/items?page=${pageNumber}&per_page=40`;
//     } else {
//       qiitaApiUrl = `https://qiita.com/api/v2/tags/${tag}/items?page=${pageNumber}&per_page=40`
//     }
    
//     try {
//       const res = await fetch(qiitaApiUrl, {
//         headers: {
//           Authorization: "Bearer d3ced855b02d6fc773fd235f17375dbc4fa00742",
//         },
//       });
//       json = await res.json();
//       if (sort === "popular") {
//           json.sort((a, b) => b.likes_count - a.likes_count);
//       }
//     } catch (e) {
//       console.log("エラー", e);
//     }
//       // console.log(json)
//       return json;
//     };

//   // const jsonData = fetchArticles();
//   const jsonData = await fetchArticles();
  
//   //  console.log(jsonData)
//   // await console.log(jsonData)
    
//   return { jsonData };
// }



// export default function useFetchArticles({ pageNumber, sort, tag }) {
//   let jsonData = [];
    
//   const fetchArticles = async () => {
//     let json = {};
//     console.log(pageNumber);
//     console.log(sort);
//     console.log(tag);
//     let qiitaApiUrl = "";
//     if (tag == "") {
//       qiitaApiUrl = `https://qiita.com/api/v2/items?page=${pageNumber}&per_page=40`;
//     } else {
//       qiitaApiUrl = `https://qiita.com/api/v2/tags/${tag}/items?page=${pageNumber}&per_page=40`
//     }

//     console.log(qiitaApiUrl)
    
//     try {
//       const res = await fetch(qiitaApiUrl, {
//       headers: {
//         Authorization: "Bearer d3ced855b02d6fc773fd235f17375dbc4fa00742",
//       },
//     });
//       json = await res.json();
//     if (sort === "popular") {
//         json.sort((a, b) => b.likes_count - a.likes_count);
//     }
//     } catch (e) {
//       console.log("エラー", e);
//     }
//     return json;
//     };

//   fetchArticles().then((json) => {
//     jsonData = json;
//     // console.log(jsonData)
//   })

//   return { jsonData };
// }