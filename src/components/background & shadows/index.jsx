import React from 'react'

function index() {
  return (
    <>
    {/* <!-- Background classNamees --> */}
    <div
      className="h-64 w-72 bg-blue-500 bg-cover bg-no-repeat bg-center"
      style="background-image: url('../assets/img/img1.jpg')"
    ></div>

    {/* <!-- Gradients --> */}
    <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    <div
      className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    ></div>

    {/* <!-- Shadows --> */}
    <div className="w-96 mt-6 ml-4 p-3 shadow-md">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="w-96 mt-6 ml-4 p-3 shadow-lg">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="w-96 mt-6 ml-4 p-3 shadow-xl">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="w-96 mt-6 ml-4 p-3 shadow-2xl">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="w-96 mt-6 ml-4 p-3 shadow-inner">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    {/* <!-- Shadow Colors --> */}
    <div className="w-96 mt-6 ml-4 p-3 shadow-xl shadow-blue-500/50">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="w-96 mt-6 ml-4 p-3 shadow-xl shadow-red-500/100">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>

    {/* <!-- Mix Blend --> */}
    <div className="flex justify-center -space-x-24">
      <div className="mix-blend-multiply bg-blue-400 ...">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
      <div className="mix-blend-multiply bg-pink-400 ...">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
    </div>
    </>
  )
}

export default index