import React from 'react'

function index() {
  return (
    <div>
      {/* <!-- Flex and alignment --> */}
      <div className="flex flex-wrap h-72 w-100 bg-gray-100 justify-around items-center">
        <div className="p-10 border border-blue-600 bg-blue-100">01</div>
        <div className="p-10 border border-blue-600 bg-blue-100">02</div>
        <div className="self-start p-10 border border-blue-600 bg-blue-100">
          03
        </div>
        <div className="self-end p-10 border border-blue-600 bg-blue-100">
          04
        </div>
      </div>

      {/* <!-- Flex Column, Gap and Order --> */}
      <div className="flex flex-col gap-4 w-100 bg-gray-200 justify-around items-center">
        <div className="order-4 p-10 border border-blue-600 bg-blue-100">
          01
        </div>
        <div className="order-1 p-10 border border-blue-600 bg-blue-100">
          02
        </div>
        <div className="p-10 border border-blue-600 bg-blue-100">03</div>
        <div className="p-10 border border-blue-600 bg-blue-100">04</div>
      </div>

      {/* <!-- Grow and shrink --> */}
      <div className="flex w-100 bg-gray-300">
        {/* <!-- flex-none: Prevent item from growing or shrinking --> */}
        <div className="w-64 flex-none p-10 border border-blue-600 bg-blue-100">
          01
        </div>
        {/* <!-- flex-initial:  Allow item to shrink but not grow, taking into account its initial size  --> */}
        <div className="w-64 flex-initial p-10 border border-blue-600 bg-blue-100">
          02
        </div>
        {/* <!-- flex-auto: Allow item to grow and shrink, taking into account its initial size --> */}
        <div className="w-64 flex-auto p-10 border border-blue-600 bg-blue-100">
          03
        </div>
        {/* <!-- flex-1: Allow item to grow and shrink as needed, ignoring its initial size --> */}
        <div className="w-64 flex-1 p-10 border border-blue-600 bg-blue-100">
          04
        </div>
        <div className="p-10 border border-blue-600 bg-blue-100">05</div>
        <div className="p-10 border border-blue-600 bg-blue-100">06</div>
        <div className="p-10 border border-blue-600 bg-blue-100">07</div>
      </div>
    </div>
  );
}

export default index