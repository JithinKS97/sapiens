/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

export default function News({ selectedNews }: any) {
  return (
    <div className="news-container">
      <h1>{selectedNews.title}</h1>
      <img width="250px" src={selectedNews.img}></img>
      <div className="news">{selectedNews.description}</div>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
}
