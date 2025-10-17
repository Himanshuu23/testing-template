"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle hover effect for the disabled button
  const handleMouseEnter = (e: React.MouseEvent) => {
    const button = e.currentTarget;
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 space-y-6 bg-black text-white">
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
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 cursor-pointer"
        >
          Would love tooo! 😆
        </button>
        <button
          disabled
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg cursor-not-allowed"
        >
          Block kr dungi 😡
        </button>
      </div>
      <p>aur maine kuchh FAALTU ya aisa bol diya ho which is inappropriate then i am sorry -- i tried not to though mujhe daatne lag jaao kabhi🤰</p>

      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg">
            <p className="text-xl">whatsapp pe btaooo</p>
            <button
              onClick={() => window.close()}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
