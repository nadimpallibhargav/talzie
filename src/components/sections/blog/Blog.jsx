import React, { useState } from "react";
import { blogsData } from "../../../utlis/common";
import { Link } from "react-router-dom";
import "./Blog.scss";

export const Blog = () => {
  return (
    <section className="blogSection">
      <div className="container">
        <div className="CheckOutSection">
          <h1 className="latestNews">Latest Articles</h1>
        </div>
        <div className="CardContainer">
          {blogsData.map((data) => (
            <div key={data.id} className="Card">
              <img src={data.image} alt={data.about} className="CardImage" />
              <h2 className="CardTitle">{data.title}</h2>
              <p className="CardDescription">
                {data.shorttext.substring(0, 200) + "..."}
              </p>

              <div className="buttonContainer">
                <Link to={`/blog/${data.id}`}>
                  <button type="button" className="primaryBtn">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
