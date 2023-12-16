import React, { useContext, useState } from "react";
import AppContext from "../../context/BlogContext";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const { createBlog } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState([]);

  const navigate = useNavigate();

  const handleClickCreateToBlog = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
    setImg("");
    createBlog(title, desc, img);
    navigate("/blogs");
  };

  return (
    <div className="flex justify-center p-8 w-full bg-gray-200">
      <form className="max-w-2xl">
        <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
          <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2">Create Blog</h2>

          <div className="flex flex-col gap-2 w-full border-gray-400">
            <div>
              <label className="text-gray-600 dark:text-gray-400">Title</label>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                type="text"
              />
            </div>

            <div>
              <label className="text-gray-600 dark:text-gray-400">Description</label>
              <textarea
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                name="bio"></textarea>
            </div>

            <div>
              <label className="text-gray-600 dark:text-gray-400">İmage</label>
              <input
                placeholder="Lütfen link olarak girin!"
                value={img}
                onChange={(e) => {
                  setImg(e.target.value);
                }}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                type="text"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleClickCreateToBlog}
                className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700 w-full"
                type="submit">
                Add Blog
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
