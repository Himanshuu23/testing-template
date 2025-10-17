"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen p-4 space-y-6 bg-white">
      <h1 className="text-3xl font-bold">gifttttttt</h1>
      <div className="flex items-center space-x-4">
        <div className="relative w-24 h-24">
          <Image
            src="/earrings.png"
            alt="Gift Earrings"
            width={96}
            height={96}
            className="object-cover rounded-2xl"
          />
        </div>
        <span className="text-3xl font-bold">+</span>
        <div className="relative w-24 h-24">
          <Image
            src="/aanya1.jpeg"
            alt="Gift Earrings"
            width={96}
            height={96}
            className="object-cover rounded-2xl"
          />
        </div>
        <span className="text-3xl font-bold">=</span>
        <p className="text-xl">on Diwali?</p>
      </div>
      <Link href="/page7">
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 mt-4">
          Next
        </button>
      </Link>
    </div>
  );
}
