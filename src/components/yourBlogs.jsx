import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AddBlogContext } from '../context/AddBlogContext';
import { Link, NavLink } from 'react-router-dom';
import Nav from './Home/Nav';
import { AiOutlineDelete } from 'react-icons/ai'

export default function YourBlogs() {
    const { theme } = useContext(ThemeContext);
    const { blogs = [], handleDelete } = useContext(AddBlogContext)
    return (
        <section className={"w-screen h-screen px-[200px] py-20 flex items-center justify-center " + (theme ? "bg-white text-black" : "grad text-white")}>
            <Nav />
            {blogs.length === 0 ? <div>
                You have no Blogs. Want to create one? <Link to={"/addBlog"}>Click here to start!</Link>
            </div> : <div className='flex w-full flex-col items-center justify-center gap-5'>
                {blogs.map((post) => (<div className='flex items-start gap-2'>
                    <div className=''>
                        <NavLink to={`/blog/${post.id}`} >
                            <span className='text-base font-bold'>{post.title}</span>
                        </NavLink>
                        <p className='text-sm font-medium'>
                            By
                            <span className='font-bold italic'>{" "}{post.author}</span>
                            {" "}on {" "}
                            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                                <span className='underline text-blue-900'>{post.category}</span>
                            </NavLink>
                        </p>
                        <p className='font-medium text-xs'> Posted on {post.date} </p>
                        <p className='font-medium text-sm'> {post.blog}</p>
                    </div>
                    <AiOutlineDelete onClick={() => handleDelete(post.id)} className='h-8 w-8 cursor-pointer bg-red-500 p-2 rounded-full' />
                </div>))}
            </div>}
        </section>
    )
}
