import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">ResoluteAI</span>
            <span className="text-slate-700">Software</span>
          </h1>
        </Link>
        <form className="bg-slate-100 flex items-center p-3 rounded-lg">
          <input
            className="w-24 sm:w-64 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="text-slate-700 hover:underline hidden sm:inline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-slate-700 hover:underline hidden sm:inline">
              About
            </li>
          </Link>
          <Link to={"/sign-in"}>
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
