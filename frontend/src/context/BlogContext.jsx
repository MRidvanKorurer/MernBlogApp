import React, { useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const Provider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  async function getBlogs() {
    try {
      const response = await axios.get("http://localhost:3000/api/blogs");
      console.log(response);
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error(error);
    }
  }

  const createBlog = async (title, desc, img) => {
    try {
      const response = await axios.post("http://localhost:3000/api/blogs", {
        title: title,
        description: desc,
        image: img,
      });
      // console.log(response);

      const newBlogs = [...blogs, response.data];

      setBlogs(newBlogs);
    } catch (error) {
      console.log(error);
    }
  };


  const deleteBlog = async (id) => {
    try {
      if (window.confirm("Bloğu silmek istediğinize emin misiniz!")) {
        await axios.delete(`http://localhost:3000/api/blogs/${id}`);
        const deletedBlog = blogs.filter((item) => {
          return item._id !== id;
        });

        setBlogs(deletedBlog);
      } else {
        alert("Silme işlemi iptal edildi!");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }


  const updateBlog = async (title, desc, img, id) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/blogs/${id}`, {
        title: title,
        description: desc,
        image: img
      });

      console.log(response);
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const sharedValuesAndMethods = {
    getBlogs,
    blogs,
    setBlogs,
    createBlog,
    deleteBlog,
    updateBlog
  };

  return (
    <AppContext.Provider value={sharedValuesAndMethods}>{children}</AppContext.Provider>
  );
};

export { Provider };
export default AppContext;
