import React from "react";

import "../../styles/News/NewsCategory.scss";

export default function NewsCategory(props) {
  return (
    <div className="category-wrap">
      {props.categoryOption.map((category) => (
        <div className="post-category" key={Math.random()}>
          #{category}
        </div>
      ))}
    </div>
  );
}
