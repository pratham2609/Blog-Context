import { createContext, useContext, useEffect, useState } from "react";

export const AddBlogContext = createContext();
export const AddBlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const newBlogs = localStorage.getItem("blogs");
        if (newBlogs) {
            setBlogs(JSON.parse(newBlogs))
        }
    }, []);

    const addBlog = (e) => {
        e.preventDefault();
        setBlogs((prev) => {
            const newBlogs = [
                {
                    title: e.target.title.value,
                    author: e.target.author.value,
                    blog: e.target.blog.value, // Corrected: e.target.blog.value
                    category: e.target.category.value,
                    id: e.target.title.value + "a",
                    date: new Date()
                },
                ...prev
            ];

            localStorage.setItem("blogs", JSON.stringify(newBlogs));
            return newBlogs;
        });
        e.target.reset()
    }

    const handleDelete = (id) => {
        setBlogs((prev) => {
            const newBlogs = prev.filter((blog) => blog.id !== id);
            localStorage.setItem("blogs", JSON.stringify(newBlogs));
            return newBlogs;
        });
    }

    return (
        <AddBlogContext.Provider value={{ blogs, setBlogs, addBlog, handleDelete }}>
            {children}
        </AddBlogContext.Provider>
    );
}

export function useBlog() {
    const blogContextValue = useContext(AddBlogContext);
    if (!blogContextValue) {
        throw new Error('useBlog used outside of provider'); // Corrected: 'useBlog' instead of 'UseBlogs'
    }
    return blogContextValue;
}
