import React from 'react'

function index() {
  return (
    <>
      {/* <!-- Positioning --> */}
      <div className="relative w-1/2 h-12 bg-red-200">
        <p>Relative parent</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>Absolute child</p>
        </div>
      </div>

      {/* <!-- Top left corner --> */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300">01</div>
      </div>

      {/* <!-- Top right corner --> */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute top-0 right-0 h-16 w-16 bg-yellow-300">03</div>
      </div>

      {/* <!-- Bottom left corner --> */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute bottom-0 left-0 h-16 w-16 bg-yellow-300">07</div>
      </div>

      {/* {/* <!-- Bottom right corner --> */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute bottom-0 right-0 h-16 w-16 bg-yellow-300">09</div>
      </div>

      {/* <!-- Span top edge --> */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300">02</div>
      </div>

      {/* <!-- Span left edge --> */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300">04</div>
      </div>

      {/* <!-- Span right edge --> */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 right-0 w-16 bg-yellow-300">06</div>
      </div>

      {/* <!-- Span bottom edge --> */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300">08</div>
      </div>

      {/* <!-- Display classNamees --> */}
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        <span className="inline">
          This is display inline and will wrap normally
        </span>
        sapiente ut rerum esse ullam provident, fugit
        <span className="inline-block">
          This is display inline-block and will not extend beyond it's parent
        </span>
        eos quam
        <span className="block">
          This is display block and will move to it's own line
        </span>
        reprehenderit est hic aut unde sequi, officia, ipsa amet doloribus
        ratione
        <span className="hidden">
          This is display none and will not display at all
        </span>
        ad.
      </div>

      {/*  <!-- Z-Index -->  */}
      <div className="relative h-36">
        <div className="absolute left-10 w-24 h-24 bg-blue-200 z-40">1</div>
        <div className="absolute left-20 w-24 h-24 bg-blue-300">2</div>
        <div className="absolute left-40 w-24 h-24 bg-blue-400 z-10">3</div>
        <div className="absolute left-60 w-24 h-24 bg-blue-500 z-20">4</div>
        <div className="absolute left-80 w-24 h-24 bg-blue-600">5</div>
      </div>

      {/* <!-- Floats --> */}
      <div className="w-1/2">
        <img className="h-48 w-48 float-right" src="https://cdn.futura-sciences.com/sources/images/actu/google-images-rechercher.jpg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          numquam voluptatem accusantium atque cupiditate nulla ratione saepe
          veniam, ex iure nisi mollitia sed rerum veritatis temporibus iusto!
          Molestiae, ratione doloribus?
        </p>
      </div>
    </>
  );
}

export default index