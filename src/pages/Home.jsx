import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='w-full flex justify-center overflow-y-hidden pt-20'>
        <Blogs />
      </div>
      <Pagination />
    </div>
  )
}
