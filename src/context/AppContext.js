import React, { createContext, useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { useNavigate } from "react-router-dom";
//step1: create context
export const AppContext = createContext();
//step2: create provider
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();
  //step3: data filling in value
  async function fetchBlogPosts(page = 1, tag = null, category = null) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) url += `&tag=${tag}`;
    if (category) url += `&category=${category}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (!result.posts || result.posts.length === 0)
        throw new Error(result.message);
      setPosts(result.posts);
      setPage(result.page);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.log("error in fetching data");
      setPage(1);
      setTotalPages(null);
      setPosts([]);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    navigate({ search: `?page=${page}` });
  }

  // step4: create value
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
