import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import CreateBlog from "./components/blog/CreateBlog";
import UpdateBlog from "./components/blog/UpdateBlog";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/updateBlog" element={<UpdateBlog />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
