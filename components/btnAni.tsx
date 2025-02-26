"use client";
import "./btnAni.css";

export default function LoaderAnimations() {
  return (
    <div className="test grid grid-cols-3 md:grid-cols-4 gap-8">
      {/* <!-- Circle Spinner --> */}
      <div className="btn-card bg-white  p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="border-4 border-blue-500  rounded-full w-12 h-12 spinner-circle"></div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Loading...
        </button>
      </div>

      {/* <!-- Dots Spinner --> */}
      <div className="btn-card bg-white  p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="dots-container">
          <div className="dot bg-purple-500 "></div>
          <div className="dot bg-purple-500 "></div>
          <div className="dot bg-purple-500 "></div>
        </div>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
          Processing...
        </button>
      </div>

      {/* <!-- Pulse Spinner --> */}
      <div className="btn-card bg-white  p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-green-500 pulse"></div>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Updating...
        </button>
      </div>

      {/* <!-- Wave Spinner --> */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="wave-container">
          <div className="wave-bar bg-red-500"></div>
          <div className="wave-bar bg-red-500"></div>
          <div className="wave-bar bg-red-500"></div>
          <div className="wave-bar bg-red-500"></div>
          <div className="wave-bar bg-red-500"></div>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          Syncing...
        </button>
      </div>

      {/* bounce  */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="relative flex flex-col items-center justify-center overflow-hidden py-4">
          <button className="animate-bounce rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Bounce button
          </button>
        </div>
      </div>

      {/* pulse */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="relative flex flex-col items-center justify-center overflow-hidden py-4">
          <button className="animate-pulse rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Pulse button
          </button>
        </div>
      </div>

      {/* ping */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="relative flex flex-col items-center justify-center py-4">
          <button className="animate-ping rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Ping button
          </button>
        </div>
      </div>

      {/* another type */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="transform rounded bg-blue-500 px-4 py-2 shadow-xl transition duration-300 hover:scale-125">
          <div className="flex h-full justify-center items-center">
            <span className="font-bold text-white">Scale Button</span>
          </div>
        </div>
      </div>
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="transform rounded bg-blue-500 px-4 py-2 shadow-xl transition duration-300 hover:rotate-180">
          <div className="flex h-full justify-center items-center">
            <span className="font-bold text-white">Rotate Button</span>
          </div>
        </div>
      </div>
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="transform rounded bg-blue-500 px-4 py-2 shadow-xl transition duration-300 hover:translate-x-4">
          <div className="flex h-full justify-center items-center">
            <span className="font-bold text-white">Slide Button</span>
          </div>
        </div>
      </div>

      {/* border */}

      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <button
          className="
      group
      p-5
      cursor-pointer
      relative
      text-xl
      font-normal
      border-0
      flex
      items-center
      justify-center
      bg-white
      h-10
      w-32
      overflow-hidden
      transition-all
      duration-100"
        >
          <span
            className="
         group-hover:w-full
         absolute
         left-0
         h-full
         w-5
         border-y-2
         border-l-2
         border-grey-300
         transition-all
         duration-500"
          ></span>
          <p
            className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200"
          >
            Hover me
          </p>
          <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
            Thank you!
          </span>
          <span className="group-hover:w-full absolute right-0 h-full w-5  border-y-2 border-r-2  border-grey-300 transition-all duration-500"></span>
        </button>
      </div>

      {/* winona */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div
          className="button--winona p-0 bg-blue-500 hover:bg-blue-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden"
          data-text="Read More"
        >
          <span className="align-middle block text-white">Flip Button</span>
        </div>
      </div>

      {/* Moema */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="button--moema px-5 py-3 bg-blue-500 hover:bg-blue-700 hover:text-white text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest">
          Bg Ripple
        </div>
      </div>

      {/* Nina */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div
          className="button--nina px-5 py-0 bg-blue-500 hover:bg-blue-700 text-white hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
          data-text="Filter"
        >
          <span className="align-middle">F</span>
          <span className="align-middle">i</span>
          <span className="align-middle">l</span>
          <span className="align-middle">t</span>
          <span className="align-middle">e</span>
          <span className="align-middle">r</span>
        </div>
      </div>

      {/* border glow  */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2">
              <p className="text-slate-800">Glowing Border</p>
            </div>
          </div>
        </div>
      </div>

      {/* gradient glow */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <button className="gradient-glow-button text-white font-bold py-4 px-8 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-110">
          Gradient glow!
        </button>
      </div>

      {/* bg color change */}
      <div className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="text-gray-500 hover:text-white font-medium py-4 px-4 rounded-md shadow-lg border text-lg cursor-pointer relative before:absolute before:bg-blue-500 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
          <span className="relative">Hover over me</span>
        </div>
      </div>

      {/* fade in */}
      {/* {[
        "fadein",
        "fadeout",
        "fadeindown",
        "fadeinup",
        "fadeinleft",
        "fadeinright",
        "fadeoutdown",
        "fadeoutup",
        "fadeoutleft",
        "fadeoutright",
        "fadeouttopleft",
        "fadeouttopright",
      ].map((animation) => (
        <div
          key={animation}
          className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4"
        >
          <div
            className={`w-32 h-10 flex items-center justify-center border border-gray-300 bg-white shadow-md rounded-lg ${animation}`}
          >
            {animation}
          </div>
        </div>
      ))} */}

      {/* Zoom */}
      {/* {[
        "zoomin",
        "zoominup",
        "zoomindown",
        "zoominleft",
        "zoominright",
        "zoomout",
        "zoomoutup",
        "zoomoutdown",
        "zoomoutleft",
        "zoomoutright",
      ].map((animation) => (
        <div
          key={animation}
          className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4"
        >
          <div
            className={`w-32 h-10 flex items-center justify-center border border-gray-300 bg-white shadow-md rounded-lg ${animation}`}
          >
            {animation}
          </div>
        </div>
      ))} */}

      {/* Flip */}
      {/* {[
        "flip",
        "flipup",
        "flipdown",
        "flipleft",
        "flipright",
        "fliptopleft",
        "fliptopright",
        "flipbottomleft",
        "flipbottomright",
      ].map((animation) => (
        <div
          key={animation}
          className="btn-card bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4"
        >
          <div
            className={`w-32 h-10 flex items-center justify-center border border-gray-300 bg-white shadow-md rounded-lg ${animation}`}
          >
            {animation}
          </div>
        </div>
      ))} */}
    </div>
  );
}
