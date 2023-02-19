import React from "react";
import "../../styles/News/NewsPost.scss";

export default function NewsPost(props) {
  return (
    <section className="post-card">
      <img className="card-img-top" src={props.img} alt="" />

      <div className="card-body">
        <h2>
          {props.title.length > 50
            ? `${props.title.substring(0, 50)}...`
            : props.title}
        </h2>
        <p>
          {props.content.length > 200
            ? `${props.content.substring(0, 200)}...`
            : props.content}
        </p>
      </div>
      <div className="card-footer">
        <span className="date">{props.date}</span>
        <span className="post-btn">
          <a href={props.readMoreUrl} target="_blank" rel="noreferrer">
            Read more
          </a>
        </span>
      </div>
    </section>
  );
}
