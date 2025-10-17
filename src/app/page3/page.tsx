"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg", "/5.jpeg"];

export default function Page3() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-6 bg-white space-y-6">
      <h1 className="text-3xl font-bold text-center">old old 🤰</h1>
        <p> miss being called mera bacha :( </p>
      <div className="relative w-full max-w-xs h-64 flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &#8592;
        </button>

        <Image
          src={images[current]}
          alt={`Slide ${current + 1}`}
          width={320}
          height={256}
          className="rounded-xl object-cover"
        />

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &#8594;
        </button>
      </div>

      <Link href="/page4">
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 mt-4">
          Next
        </button>
      </Link>
    </div>
  );
}
