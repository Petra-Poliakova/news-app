import React, { useState, useEffect } from "react";

import "../../styles/News/NewsBanner.scss";

export default function NewsBanner() {
  const [bannerPosts, setBannerPosts] = useState([]);
  const [bannerPostsSec, setBannerPostsSec] = useState([]);

  var postURL = `https://inshorts.deta.dev/news?category=all`;

  useEffect(() => {
    const fetchPost = async () => {
      await fetch(`${postURL}`, {
        method: "GET",
        headers: {},
      })
        .then((response) => {
          response.json().then((json) => {
            setBannerPosts(json.data);
            setBannerPostsSec(json.data.slice(1));
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchPost();
  }, [postURL]);

  return (
    <div>
      <div className="home-page-wrapper">
        {bannerPosts
          .filter((item, i) => i < 1)
          .map((post) => (
            <div className="left-banner" key={Math.random()}>
              <img src={post.imageUrl} alt="news category" />
              <div className="title-bg">
                <h3>{post.title}</h3>
              </div>
            </div>
          ))}
        <div className="right-banner">
          {bannerPostsSec
            .filter((item, i) => i < 4)
            .map((post) => (
              <div className="small-banner" key={Math.random() + 1}>
                <img src={post.imageUrl} alt="news category" />
                <div className="title-bg">
                  <h3>{post.title}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
      <p className="slogan">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus
        sapien, suscipit posuere nibh non, consequat venenatis leo. Ut dictum
        sed magna nec sodales. Suspendisse malesuada ex non purus rutrum
        fermentum.
      </p>
    </div>
  );
}
