"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../../components/organisms/navbar/Navbar";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  image: string;
};

type Blog = {
  id: number;
  title: string;
  content: BlogPost[];
};

const BlogPage: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`/api/blog?id=${id}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data: Blog = await response.json();
          setBlog(data);
        } catch (error) {
          console.error("Failed to fetch blog:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="blogWrap">
        <Navbar />
        <div className="loadingContainer">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blogWrap">
        <Navbar />
        <div className="blogContainer">
          <p>Blog not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blogWrap">
      <Navbar />
      <div className="blogContainer">
        {blog.content.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            {!post.image ? (
              ""
            ) : (
              <img
                src={post.image}
                alt={post.title}
                style={{ marginBottom: 20 }}
              />
            )}

            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
