"use client";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-slate-300 dark:bg-neutral-950 h-screen px-5">
        <h1 className="text-neutral-900 dark:text-neutral-200 text-6xl font-semibold">
          Hello, I&apos;m{" "}
          <span className="text-red-600 dark:text-yellow-300">
            Bhanu Pratap Sharma
          </span>
        </h1>

        <h1 className="text-neutral-900 dark:text-neutral-200 text-4xl font-semibold mt-4">
          I am a Full Stack{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Web Developer</span>
        </h1>

        <button
          className="bg-black dark:bg-neutral-200 text-white dark:text-neutral-900 px-4 py-2 rounded-md mt-4"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}
