import React from "react";
import Header from "./components/header/Header";
import { blogsData } from "./utlis/common";
import { useParams } from "react-router-dom";
import "./components/sections/blog/Blog.scss";

export const BlogDetailPage = () => {
  const { id } = useParams();
  let blog = blogsData.filter((single) => single.id == id);
  blog = blog[0];

  return (
    <>
      <Header />
      <main>
        <section className="blogSection blogDetailSection">
          <div className="container">
            <h1 className="CardTitle">{blog.title}</h1>
            <div className="blogFeaturedImage">
              <img src={blog.image} alt={blog.about} className="CardImage" />
            </div>
            <div className="blogDetailContent">
              <div
                className="blogDetailText"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              ></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
