import React from "react";

import "../../styles//News/NewsSelectCategory.scss";

export default function NewsFilterCategory(props) {
  const { categories, selectedCategory, onChangeCategory } = props;

  return (
    <div className="select-category-wrap">
      <select
        className="category-select"
        value={selectedCategory}
        onChange={onChangeCategory}
      >
        <option className="category-option" value="category">
          Select category
        </option>
        {categories.map((category) => (
          <option value={category} key={Math.random()}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
