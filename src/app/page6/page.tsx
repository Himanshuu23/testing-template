"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 space-y-6">
      <h1 className="text-3xl font-bold">Happy Birthday ❤️</h1>
      <p className="text-lg">Click next to begin the surprise</p>
      <Link href="/page7">
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
          Next
        </button>
      </Link>
    </div>
  );
}
