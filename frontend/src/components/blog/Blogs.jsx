import React, { useContext, useEffect } from "react";
import AppContext from "../../context/BlogContext";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const { getBlogs, blogs, deleteBlog, updateBlog } = useContext(AppContext);

  const navigate = useNavigate();

  const handleClickDeleteToBlog = async (id) => {
    deleteBlog(id);
  };


  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className=" bg-gray-300 p-8 ">
      {blogs.map((item) => {
        return (
          <div
            key={item._id}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8 p-2 ">
            <div className="md:flex">
              <div className="md:shrink-0 gap-10">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={item.image}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {item.title}
                </div>
                <p
                  href="#"
                  className="block text-lg leading-tight font-medium text-black  mt-2">
                  {item.description}
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center ml-auto">
                <button
                  onClick={() => handleClickDeleteToBlog(item._id)}
                  className=" bg-red-600 text-white p-1 w-20 rounded hover:bg-red-800 transition-all">
                  Sil
                </button>
                <button
                  className=" bg-indigo-600 mt-2 text-white p-1 w-20 rounded hover:bg-indigo-800 transition-all">
                  Düzenle
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
