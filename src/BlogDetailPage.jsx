import React from "react";
import { blogsData } from "./utlis/common";
import { useParams } from "react-router-dom";

export const BlogDetailPage = () => {
  const { id } = useParams();
  let blog = blogsData.filter((single) => single.id == id);
  blog = blog[0];

  return (
    <div>
      <div className="container">
        <div key={blog.id} className="Card">
          <img src={blog.image} alt={blog.about} className="CardImage" />
          <h2 className="CardTitle">{blog.title}</h2>
          <p className="CardDescription">{blog.description}</p>
        </div>
      </div>
    </div>
  );
};
