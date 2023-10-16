import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1 className='text-center m-2 font-serif text-base font-bold'>Tailwind CSS Sandbox</h1>
      <div className="flex justify-center items-center container space-x-6 space-y-3 mx-auto flex-wrap">
        <Link to={"/colors"}>
          <button className='bg-slate-600 text-white p-2'>Colors</button>
        </Link>
        <Link to={"/container-spacing"}>
          <button className='bg-slate-600 text-white p-2'>Container & Spacing</button>
        </Link>
        <Link to={"/typography"}>
          <button className='bg-slate-600 text-white p-2'>Typography</button>
        </Link>
        <Link to={"/sizing"}>
          <button className='bg-slate-600 text-white p-2'>Width & Height</button>
        </Link>
        <Link to={"/position"}>
          <button className='bg-slate-600 text-white p-2'>Layout Position</button>
        </Link>
        <Link to={"/bg-shadows"}>
          <button className='bg-slate-600 text-white p-2'>Background & Shadows</button>
        </Link>
        <Link to={"/borders"}>
          <button className='bg-slate-600 text-white p-2'>Border & Border Radius</button>
        </Link>
        <Link to={"/filters"}>
          <button className='bg-slate-600 text-white p-2'>Filters</button>
        </Link>
        <Link to={"/interactivity"}>
          <button className='bg-slate-600 text-white p-2'>Interactivity</button>
        </Link>
        <Link to={"/breackpoints"}>
          <button className='bg-slate-600 text-white p-2'>Breackpoints</button>
        </Link>
        <Link to={"/columns"}>
          <button className='bg-slate-600 text-white p-2'>Columns</button>
        </Link>
        <Link to={"/flexbox"}>
          <button className='bg-slate-600 text-white p-2'>Flexbox</button>
        </Link>
        <Link to={"/grid"}>
          <button className='bg-slate-600 text-white p-2'>Grid</button>
        </Link>
        <Link to={"/transition-transform"}>
          <button className='bg-slate-600 text-white p-2'>Transition And Transform</button>
        </Link>
        <Link to={"/animation"}>
          <button className='bg-slate-600 text-white p-2'>Animation</button>
        </Link>
        <Link to={"/dark-mode"}>
          <button className='bg-slate-600 text-white p-2'>Dark Mode</button>
        </Link>
      </div>
    </div>
  );
}

export default Home