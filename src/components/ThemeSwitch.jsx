import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import { ThemeContext } from '../context/ThemeContext'
import { IoMdSunny } from 'react-icons/io'
export default function ThemeSwitch() {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    return (
        <div className='w-full h-full flex items-center '>
            <button onClick={toggleTheme} className=" peer flex items-center gap-2 h-full z-50">
                <div className=' w-max'>
                    {theme ? <IoMdSunny className="text-2xl text-blue-950 cursor-pointer" /> : <BsMoonStarsFill className="text-2xl text-white cursor-pointer" />}
                </div>
            </button>
            <div className='peer-hover:scale-100 scale-0 origin-top-left absolute top-14 transition'>
                {theme ? <p className='p-2 bg-white text-black font-medium shadow-lg rounded-md'>Change theme to dark</p> : <p className='shadow-lg rounded-md p-2 bg-blue-950 text-white font-medium'>Change theme to light</p>}
            </div>
        </div>
    )
}
