import React, {useState} from 'react'
import './darkMode.css'

function DarkMode() {
    const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'dark' : undefined}>
      {/*  By default, you can have your project use whatever mode your OS is using. You can use "dark:{className}". You can also set your config to use a className instead of using your OS mode */}
      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div className="relative inline-block w-10  ml-auto mt-0.5 mb-6 align-middle select-none transition duration-200 ease-in" >
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            value={dark}
            onChange={(e)=>setDark(e.target.checked)}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
}

export default DarkMode