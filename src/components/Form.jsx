import React, { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext"
import "./Form.css"
import Nav from './Home/Nav';
import { useBlog } from '../context/AddBlogContext';

export default function Form() {
    const { theme } = useContext(ThemeContext);
    const { addBlog } = useBlog()
    return (
        <section className={"w-screen h-screen py-20 flex items-center justify-center " + (theme ? "bg-white text-black" : "grad text-white")}>
            <Nav />
            <form onSubmit={addBlog} className='blogForm w-[50vw] h-full px-10 flex flex-col justify-between py-8'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col w-full items-start gap-2'>
                        <label htmlFor="title">
                            Title for your blog
                        </label>
                        <input type='text' className='w-full border-2 p-1.5 rounded-lg bg-transparent' name='title' id='title' />
                    </div>
                    <div className='flex flex-col w-full items-start gap-2'>
                        <label htmlFor="author">
                            Author
                        </label>
                        <input type='text' className='w-full border-2 p-1.5 rounded-lg bg-transparent' name='author' id='author' />
                    </div>
                    <div className='flex flex-col w-full items-start gap-2'>
                        <label htmlFor="blog">
                            Blog
                        </label>
                        <textarea rows={10} className='w-full border-2 p-1.5 rounded-lg bg-transparent' name='blog' id='blog' />
                    </div>
                    <div className='flex flex-col w-full items-start gap-2'>
                        <label htmlFor="category">
                            Category of your blog
                        </label>
                        <input type='text' className='w-full border-2 p-1.5 rounded-lg bg-transparent' name='category' id='category' />
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <button className={"font-medium text-lg px-2 py-1 rounded-md " + (theme ? "bg-black text-white" : "bg-white text-black")}>Add</button>
                </div>
            </form>
        </section>
    )
}
