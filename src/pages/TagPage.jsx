import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import ill1 from "../assets/1768089.webp"
import ill2 from "../assets/ill2.jpg"

export default function TagPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div className='h-screen w-screen relative'>
      <Header />
      <div className='w-full flex items-center justify-center overflow-y-hidden pt-20'>
        <div className='w-full h-full flex flex-col items-center justify-center mb-10'>
          <div className='flex flex-col w-11/12 max-w-[670px] items-start gap-2'>
            <button className='rounded-md w-24 border-2 px-4 py-1' onClick={() => navigation(-1)} >
              Back
            </button>
            <h2 className='text-2xl font-bold'>
              Blogs Tagged <span className='text-blue-800 underline'>#{tag}</span>
            </h2>
          </div>
          <div className='flex w-full h-full justify-between'> <div className="h-full flex items-center justify-center">
            <img src={ill1} alt="Illustration" />
          </div>
            <Blogs />
            <div className="h-full flex items-center justify-center">
              <img src={ill2} alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}
