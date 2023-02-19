import React, { useState, useEffect } from "react";
import NewsCategory from "../components/News/NewsCategory";
import NewsListPost from "../components/News/NewsListPost";
import NewsBanner from "../components/News/NewsBanner";
import useLoading from "../hooks/useLoading";
import ActualDate from "../components/ActualDate";
import NewsSelectCategory from "../components/News/NewsSelectCategory";

//styles
import "../styles/News/News.scss";

function News() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loader, showLoader, hideLoader] = useLoading();
  const [isSelected, setIsSelected] = useState(false);
  // prettier-ignore
  const categories = ["all", "national", "business", "sports", "world", "politics", "technology", "startup", "entertainment", "miscellaneous", "hatke", "science", "automobile"];

  let url = query
    ? `https://inshorts.deta.dev/news?category=${query}`
    : "https://inshorts.deta.dev/news?category=all";

  const fetchData = async () => {
    showLoader();
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Response is not o.k");
      }
      const json = await response.json();
      if (json.success) {
        setPosts(json.data);
      } else {
        alert("This category was not found. Please select from the list.");
      }
      hideLoader();
    } catch (error) {
      console.log(error);
      setError(error.message);
      hideLoader();
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  //submit form
  const handleSelect = (e) => {
    setQuery(e.target.value);
    setIsSelected(true);
  };

  let searchTitle = `${query.charAt(0).toUpperCase()}${query.slice(1)}`;

  //template
  return (
    <div>
      <div className="blog-wrapper">
        <div className="blog-list-post">
          <NewsBanner />
          {isSelected ? <h2>{searchTitle}</h2> : <h2>News from world</h2>}
          {error && <h2>{error}</h2>}
          <NewsSelectCategory
            categories={categories}
            onChangeCategory={handleSelect}
          />
          <NewsListPost posts={posts} />
        </div>
        <div className="blog-aside">
          <ActualDate />
          <NewsCategory categoryOption={categories} />
        </div>
        {loader}
      </div>
    </div>
  );
}
export default News;
