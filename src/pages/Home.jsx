import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Tailwind CSS Sandbox</h1>
      <div className="links">
        <Link to={"/colors"}>
          <button>Colors</button>
        </Link><br/>
        <Link to={"/container-spacing"}>
          <button>Container & Spacing</button>
        </Link>
      </div>
    </>
  );
}

export default Home