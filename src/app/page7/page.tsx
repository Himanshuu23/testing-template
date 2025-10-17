"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const dodgeButtonRef = useRef<HTMLButtonElement>(null);

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

  const handleMouseMoveOnWindow = (e: MouseEvent) => {
    const btn = dodgeButtonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const offset = 80; // how close before it moves
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distX = mouseX - (rect.left + rect.width / 2);
    const distY = mouseY - (rect.top + rect.height / 2);

    if (
      Math.abs(distX) < rect.width / 2 + offset &&
      Math.abs(distY) < rect.height / 2 + offset
    ) {
      // button is “too close” — move it
      const deltaX = (offset * (distX / Math.abs(distX))) || offset;
      const deltaY = (offset * (distY / Math.abs(distY))) || offset;
      let newLeft = rect.left + deltaX;
      let newTop = rect.top + deltaY;

      // keep inside window bounds
      const maxX = window.innerWidth - rect.width;
      const maxY = window.innerHeight - rect.height;
      if (newLeft < 0) newLeft = 0;
      if (newLeft > maxX) newLeft = maxX;
      if (newTop < 0) newTop = 0;
      if (newTop > maxY) newTop = maxY;

      btn.style.position = "fixed";
      btn.style.left = `${newLeft}px`;
      btn.style.top = `${newTop}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMoveOnWindow);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveOnWindow);
    };
  }, []);

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = dodgeButtonRef.current;
    if (!btn) return;
    // reset
    btn.style.transform = "";
    btn.style.left = "";
    btn.style.top = "";
    btn.style.position = "";
  };

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
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 cursor-pointer"
        >
          Would love tooo! 😆
        </button>
        <button
          ref={dodgeButtonRef}
          onMouseLeave={handleMouseLeave}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg"
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
            <p className="text-xl text-black">whatsapp pe btaooo</p>
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
