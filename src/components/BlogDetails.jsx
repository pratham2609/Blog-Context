import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({ post }) => {
    return (
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
            <p className='font-medium text-sm'> {post.content}</p>
            <div className='flex gap-2'>
                {post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span className='text-xs underline font-bold text-gray-700'>{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails
