import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

export default function TagPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className='flex justify-center'>
        <div className='w-11/12 max-w-[670px] flex flex-col gap-5 mt-20 mb-10'>
          <div className='flex flex-col gap-2'>
            <button className='rounded-md w-24 border-2 px-4 py-1' onClick={() => navigation(-1)} >
              Back
            </button>
            <h2 className='text-2xl font-bold'>
              Blogs Tagged <span className='text-blue-800 underline'>#{tag}</span>
            </h2>
          </div>
          <Blogs />
        </div>
      </div>
      <Pagination />

    </div>
  )
}
