"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center min-h-screen px-8 py-12 bg-white">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Happy Birthday 5 feet ❤️
      </h1>
      <div className="flex items-center justify-center space-x-12 mb-8">
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/mam.png"
            alt="Message Screenshot"
            width={300}
            height={150}
            className="rounded-2xl object-cover"
          />
          <Image
            src="/womens.jpeg"
            alt="Image B"
            width={320}
            height={320}
            className="rounded-2xl object-cover"
          />
        </div>
        <Image
          src="/aanya2.jpeg"
          alt="Image C"
          width={340}
          height={340}
          className="rounded-2xl object-cover"
        />
      </div>
      <Link href="/page2">
        <button className="px-8 py-3 bg-pink-500 text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-pink-600 transition cursor-pointer">
          Next
        </button>
      </Link>
    </div>
  );
}
