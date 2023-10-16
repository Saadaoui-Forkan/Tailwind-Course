import React from "react";

function index() {
  return (
    <>
      {/* <!-- No Transition --> */}
      <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700">
        Click me
      </button>

      {/* <!-- Transition --> */}
      <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded transition-colors duration-700 hover:bg-blue-700">
        Click me
      </button>

      {/* <!-- Transition & Transform --> */}
      <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded transition ease-in-out delay-150 duration-2000 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
        Click me
      </button>

      {/* <!-- Transform & Transition --> */}
      <img
        src="https://mynexttablet.com/wp-content/uploads/2022/12/apple-ipad-pro-m2.jpg"
        alt=""
        className="hover:transform hover:rotate-180 hover:scale-75 hover:skew-x-12 transition"
      />
    </>
  );
}

export default index;
