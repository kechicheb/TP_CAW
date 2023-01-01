import React from "react";
import { Link } from "react-router-dom";

export default function Nav_bar() {
  return (
    <div className=" h-16 border-b-4 border-black flex justify-center space-x-4 pt-[12px]">
      <Link
        className="links bg-[#95a4ff]  flex items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8"
        to="/"
      >
        Home
      </Link>
      <Link
        className="links bg-[#95a4ff]  flex items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8"
        to="/blog"
      >
        Blogs
      </Link>
      <Link
        className="links bg-[#95a4ff]  flex items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8"
        to="/contacts"
      >
        Contacts
      </Link>
    </div>
  );
}
