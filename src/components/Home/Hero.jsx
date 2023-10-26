import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function Hero() {
    const { theme } = useContext(ThemeContext)
    return (
        <section className={'w-screen h-screen ' + (theme ? "text-black" : "text-white")}>
            <div className='w-full h-full grid grid-cols-2'>
                <div className='h-full w-full items-center flex justify-center'>
                    <p className='font-bold text-6xl pl-[200px] pr-10'>
                        A small yet great Blogging Website for your daily Life.
                    </p>
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-full h-full '>
                        <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg' alt='heroImg' />
                    </div>
                </div>
            </div>
        </section>
    )
}
