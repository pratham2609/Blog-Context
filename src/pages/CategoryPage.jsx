import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import BlogLayout from '../components/layout/BlogLayout';

export default function CategoryPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <BlogLayout>
      <div className='w-11/12 max-w-[670px] flex flex-col justify-start gap-2 h-full overflow-y-auto '>
        <div className='flex flex-col gap-2'>
          <button className='rounded-md w-24 border-2 px-4 py-1' onClick={() => navigation(-1)} >
            Back
          </button>
          <h2 className='text-2xl font-bold'>
            Blogs on <span className='text-orange-800'>{category}</span>
          </h2>
        </div>
        <Blogs />
      </div>
    </BlogLayout>
  )
}
