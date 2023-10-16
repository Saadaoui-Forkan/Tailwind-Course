import React from 'react'

function index() {
  return (
    <>
      {/* <!-- Grid cols and rows --> */}
      <div className="grid grid-cols-3 grid-rows-4 gap-4 w-100 bg-gray-100">
        <div className="p-10 border border-blue-600 bg-blue-100">01</div>
        <div className="p-10 border border-blue-600 bg-blue-100">02</div>
        <div className="p-10 border border-blue-600 bg-blue-100">03</div>
        <div className="p-10 border border-blue-600 bg-blue-100">04</div>
        <div className="p-10 border border-blue-600 bg-blue-100">05</div>
        <div className="p-10 border border-blue-600 bg-blue-100">06</div>
        <div className="p-10 border border-blue-600 bg-blue-100">07</div>
        <div className="p-10 border border-blue-600 bg-blue-100">08</div>
        <div className="p-10 border border-blue-600 bg-blue-100">09</div>
      </div>

      {/* <!-- Col and row span --> */}
      <div className="grid grid-cols-3 gap-4 w-100 bg-gray-100">
        <div className="col-span-2 row-span-2 p-10 border border-blue-600 bg-blue-100">
          01
        </div>
        <div className="p-10 border border-blue-600 bg-blue-100">02</div>
        <div className="p-10 border border-blue-600 bg-blue-100">03</div>
        <div className="p-10 border border-blue-600 bg-blue-100">04</div>
        <div className="p-10 border border-blue-600 bg-blue-100">05</div>
        <div className="p-10 border border-blue-600 bg-blue-100">06</div>
        <div className="col-span-3 p-10 border border-blue-600 bg-blue-100">
          07
        </div>
        <div className="p-10 border border-blue-600 bg-blue-100">08</div>
        <div className="col-span-2 p-10 border border-blue-600 bg-blue-100">
          09
        </div>
      </div>
    </>
  );
}

export default index