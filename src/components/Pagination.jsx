import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';

export default function Pagination() {
  const { page, handlePageChange, totalPages, loading } = useContext(AppContext);
  const location = useLocation()
  return (
    <>
      {
        !location.pathname.includes('blog') && <section className=' border-t-2 py-3 w-full flex h-[60px] items-center justify-center bg-white fixed bottom-0 ' >
          <div className='w-11/12 max-w-[670px]'>
            {loading ? (<></>) : (
              <div className='w-full flex justify-between items-center'>
                <div>
                  {
                    page > 1 && (
                      <button className='rounded-md border-2 px-4 py-1' onClick={() => {
                        handlePageChange(page - 1)
                      }}>Previous</button>
                    )
                  }
                  {
                    page < totalPages && (
                      <button className='rounded-md border-2 px-4 py-1' onClick={() => {
                        handlePageChange(page + 1)
                      }
                      }>Next</button>
                    )
                  }
                </div>
                <p className='font-bold text-sm'>
                  Page {page} of {totalPages}
                </p></div>)
            }
          </div>
        </section>
      }
    </>
  )
}
