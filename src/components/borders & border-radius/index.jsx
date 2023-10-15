import React from 'react'

function index() {
  return (
    <>
    {/* <!-- Border Width & Colors --> */}
    <div className="w-96 m-3 p-5 border">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 border-2 border-blue-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 border-4 border-red-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 border-x-2 border-zinc-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 border-x-2 border-zinc-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 border-y-2 border-zinc-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 border-r-2 border-zinc-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 border-l-2 border-zinc-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 border-b-2 border-zinc-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 border-t-2 border-zinc-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>

    {/* <!-- Border Radius --> */}
    <div className="w-96 m-3 p-5 bg-gray-300 rounded">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 bg-gray-300 rounded-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 bg-gray-300 rounded-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 bg-gray-300 rounded-2xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 bg-gray-300 rounded-3xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 bg-gray-300 rounded-full">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>

    {/* <!-- Specific Sides --> */}
    <div className="w-96 m-3 p-5 bg-gray-300 rounded-t-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>
    <div className="w-96 m-3 p-5 bg-gray-300 rounded-b-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
      reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
      dolores.
    </div>

    {/* <!-- Outline --> */}
    <button className="outline outline-offset-2 outline-1">Button 1</button>
    <button className="outline outline-offset-2 outline-2">Button 2</button>
    <button className="outline outline-offset-2 outline-4">Button 3</button>
    </>
  )
}

export default index