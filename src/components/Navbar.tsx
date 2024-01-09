import { useEffect, useState } from "react";

export default function Navbar() {
  // themes: ["winter", "dark", "coffee", "synthwave"]
  const [theme, setTheme] = useState<string>("dark");
  const toggleTheme = (value: string) => {
    setTheme(value);
  };
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="navbar bg-base-100 border-b-2 border-slate-600">
      <div className="flex-none">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button
                className="btn bg-white"
                onClick={() => {
                  toggleTheme("winter");
                }}
              >
                Light
              </button>
            </li>
            <li>
              <button
                className="btn bg-slate-900 text-[#ccc]"
                onClick={() => {
                  toggleTheme("dark");
                }}
              >
                Dark
              </button>
            </li>
            <li>
              <button
                className="btn bg-[#38271c] text-[#ccc]"
                onClick={() => {
                  toggleTheme("coffee");
                }}
              >
                Coffee
              </button>
            </li>
            <li>
              <button
                className="btn bg-[#13477d] text-[#ccc]"
                onClick={() => {
                  toggleTheme("synthwave");
                }}
              >
                Synthwave
              </button>
            </li>
          </ul>
        </div>
        <h3 className="text-xl font-semibold ml-2">Mode</h3>
      </div>
      <div className="flex-1 flex justify-end">
        <a className="btn btn-ghost text-xl">Linkly</a>
      </div>
    </div>
  );
}
