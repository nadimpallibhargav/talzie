import React, { useState } from "react";
import { blogsData } from "../../../utlis/common";
import { Link } from "react-router-dom";
import "./Blog.scss";

export const Blog = () => {

  return (
    <div>
      <div className="BlogContainer">
        <div className="">
          <img
            src="https://media.istockphoto.com/id/1401269015/photo/concentrated-asian-middle-aged-female-businesswoman-using-portable-computer.webp?b=1&s=170667a&w=0&k=20&c=S71c92sfP6BeoNUoCH5JbLSm_sFQ39Ug8FcQ8WY-dJk="
            alt="blogimage"
            className="BlogImage"
          />
        </div>
        <div className="BlogContentContainer">
          <h1 className="BlogContent">Blog Content</h1>
        </div>
      </div>
      <div className="CheckOutSection">
        <h1 className="latestNews">Check our latest blogs.</h1>
      </div>
      <div className="CardContainer">
        {blogsData.map((data) => (
          <div key={data.id} className="Card">
            <img src={data.image} alt={data.about} className="CardImage" />
            <h2 className="CardTitle">{data.title}</h2>
            <p className="CardDescription">{data.description}</p>

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
  );
};
