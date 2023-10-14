import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <h1>Tailwind CSS Sandbox</h1>
        <Link to={"/colors"}>
            Colors
        </Link>
    </>
  )
}

export default Home