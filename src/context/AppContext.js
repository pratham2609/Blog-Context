import React, { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
//step1: create context
export const AppContext = createContext();
//step2: create provider
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  //step3: data filling in value
  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
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
    fetchBlogPosts(page);
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
