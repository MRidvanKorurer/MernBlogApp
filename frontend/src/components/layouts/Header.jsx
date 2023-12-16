import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/BlogContext";

const Header = () => {
  const {blogs} = useContext(AppContext);

  return (
    <React.Fragment>
      <nav className="flex justify-between px-20 py-10 items-center bg-gray-800">
        <Link to="/" className="text-xl text-white font-bold">
          BlogApp
        </Link>
        <div className="flex items-center">
          <ul className="flex items-center space-x-6">
            <Link to="/" className="font-semibold text-white">
              Home
            </Link>
            <Link to="/blogs" className="font-semibold text-white">
              Blogs
            </Link>

            <li>
              <div className=" relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className=" absolute bg-red-500 text-white rounded-full flex justify-center items-center w-5 text-sm -top-3 -right-3">{blogs.length}</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
