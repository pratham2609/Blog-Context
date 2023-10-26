import React from 'react'
import Nav from '../components/Home/Nav'
import { ThemeContext } from '../context/ThemeContext'
import Hero from '../components/Home/Hero'

export default function Home() {
    const { theme } = React.useContext(ThemeContext)
    return (
        <div className={" " + (theme ? "bg-white " : "grad text-white")}>
            <Nav />
            <Hero />
        </div>
    )
}
