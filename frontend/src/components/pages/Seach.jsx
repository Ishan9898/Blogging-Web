import React, { useContext, useEffect, useState } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";
import { Context } from "../../main";

const Search = ({ title }) => {
  const { mode, blogs } = useContext(Context);
  const filteredBlogs = blogs.filter(blog => blog.title === title);

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <LatestBlogs blogs={filteredBlogs} title={"Blogs"} />
    </article>
  );
};

export default Search;
