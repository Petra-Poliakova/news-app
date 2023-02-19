import React, { useState } from "react";
import NewsPost from "./NewsPost";
import Button from "../Button";

import "../../styles/index.scss";
import "../../styles/News/NewsListPost.scss";

export default function BlogListPost(props) {
  const [isMorePosts, setIsMorePosts] = useState(true);

  const handleClickMorePost = () => {
    setIsMorePosts(!isMorePosts);

  }
  return (
    <div className="blog-list-wrapper">
      <ul className="blog-list">
        {isMorePosts ? props.posts.filter((item, i) => i < 6).map((post) => (
          <li key={Math.random()}>
            <NewsPost
              img={post.imageUrl}
              title={post.title}
              content={post.content}
              date={post.date}
              readMoreUrl={post.readMoreUrl}
            />
          </li>
        )) : props.posts.map((post) => (
          <li key={Math.random()}>
            <NewsPost
              img={post.imageUrl}
              title={post.title}
              content={post.content}
              date={post.date}
              readMoreUrl={post.readMoreUrl}
            />
          </li>
        ))}
      </ul>
      
      <Button onClick={handleClickMorePost}
      type='button'
      buttonStyle='btn-primary-outline'
      buttonSize='btn-large'
      >{isMorePosts ? '...more posts' : ' show less'}</Button>
    </div> 
  );
}
