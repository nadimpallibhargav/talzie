import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import BlogPage from "./BlogPage";
import { BlogDetailPage } from "./BlogDetailPage";
import "./global.scss";
import HeaderV2 from "./components/headerv2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderV2 />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/blog/:id" element={<BlogDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
