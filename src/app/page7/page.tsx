"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 space-y-6 bg-black text-white">
      <div className="relative w-64 h-64 mb-4">
        <Image
          src="/chaar.png"
          alt="Friends"
          width={256}
          height={256}
          className="object-cover rounded-2xl"
        />
      </div>

      <h1 className="text-3xl font-bold">celebrate together? (just 15 mins)</h1>
      <p className="text-lg">(once in a lifetime hai) :(</p>
      <p className="text-lg">u wont turn 21 againnnnnn!</p>
      <p className="text-lg">will destroy food together here</p>

      <div className="relative w-64 h-64">
        <Image
          src="/cafe.jpg"
          alt="Cafe"
          width={256}
          height={256}
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="flex items-center space-x-4 mt-4">
        <Link
          href="/page6"
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 cursor-pointer z-50"
        >
          Would love tooo! 😆
        </Link>

        <Link
          href="/page6"
          className="px-6 py-3 bg-gray-500 text-white rounded-lg cursor-pointer transition-all duration-200"
        >
          Block kr dungi 😡
        </Link>
      </div>

      <Link
        href="/page6"
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer"
      >
        next
      </Link>

      <p>
        aur maine kuchh FAALTU ya aisa bol diya ho which is inappropriate then i
        am sorry -- i tried not to though mujhe daatne lag jaao kabhi🤰 aur mere
        paas time nahi tha isliye awful design sorry about that :(
      </p>
    </div>
  );
}
