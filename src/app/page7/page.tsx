"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const modalRef = useRef<HTMLDivElement>(null);
  const dodgeButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

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

  const handleMouseMove = (e: MouseEvent) => {
    const btn = dodgeButtonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const offset = 100;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distX = mouseX - (rect.left + rect.width / 2);
    const distY = mouseY - (rect.top + rect.height / 2);

    if (
      Math.abs(distX) < rect.width / 2 + offset &&
      Math.abs(distY) < rect.height / 2 + offset
    ) {
      const deltaX = (Math.random() - 0.5) * 400;
      const deltaY = (Math.random() - 0.5) * 400;

      let newLeft = rect.left + deltaX;
      let newTop = rect.top + deltaY;

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

  const resetButtonPosition = () => {
    const btn = dodgeButtonRef.current;
    if (!btn) return;
    btn.style.position = "";
    btn.style.left = "";
    btn.style.top = "";
  };

  const handleButtonClick = () => {
    router.push("/page6");
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
          onClick={handleButtonClick}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 cursor-pointer z-50"
        >
          Would love tooo! 😆
        </button>

        <button
          ref={dodgeButtonRef}
          onClick={handleButtonClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetButtonPosition}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg cursor-pointer transition-all duration-200"
        >
          Block kr dungi 😡
        </button>
      </div>

      <button
        onClick={handleButtonClick}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer"
      >
        next
      </button>

      <p>
        aur maine kuchh FAALTU ya aisa bol diya ho which is inappropriate then i
        am sorry -- i tried not to though mujhe daatne lag jaao kabhi🤰 aur mere
        paas time nahi tha isliye awful design sorry about that :(
      </p>
    </div>
  );
}
