"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div>
      <div className="bg-background h-screen px-5">
        <h1 className="text-neutral-900 dark:text-neutral-200 text-6xl font-semibold">
          Hello, I&apos;m{" "}
          <span className="text-red-500 dark:text-yellow-300">
            Bhanu Pratap Sharma
          </span>
        </h1>

        <h1 className="text-neutral-900 dark:text-neutral-200 text-4xl font-semibold mt-4">
          I am a Full Stack{" "}
          <span className="text-blue-500 dark:text-blue-400">
            Web Developer
          </span>
        </h1>
      </div>
    </div>
  );
}
