import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Tailwind CSS Sandbox</h1>
      <div className="links">
        <Link to={"/colors"}>
          <button>Colors</button>
        </Link>
        <Link to={"/container-spacing"}>
          <button>Container & Spacing</button>
        </Link>
        <Link to={"/typography"}>
          <button>Typography</button>
        </Link>
        <Link to={"/sizing"}>
          <button>Width & Height</button>
        </Link>
        <Link to={"/position"}>
          <button>Layout Position</button>
        </Link>
        <Link to={"/bg-shadows"}>
          <button>Background & Shadows</button>
        </Link>
        <Link to={"/borders"}>
          <button>Border & Border Radius</button>
        </Link>
        <Link to={"/filters"}>
          <button>Filters</button>
        </Link>
        <Link to={"/interactivity"}>
          <button>Interactivity</button>
        </Link>
      </div>
    </>
  );
}

export default Home