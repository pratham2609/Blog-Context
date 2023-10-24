import React from 'react'
import Card from '../components/Home/Card'
import Nav from '../components/Home/Nav'
import { ThemeContext } from '../context/ThemeContext'

export default function Home() {
    const { theme } = React.useContext(ThemeContext)
    return (
        <div className={" " + (theme ? "bg-white " : "grad text-white")}>
            <Nav />
            <Card />
        </div>
    )
}
