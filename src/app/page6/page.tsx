"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 space-y-6">
      <h2 className="text-xl font-semibold">chalo ab jiyada sharmao mt</h2>
      <div className="flex flex-col space-y-4">
        <Image
          src="/shy.jpeg"
          alt="Shy"
          width={200}
          height={200}
          className="object-cover rounded-lg"
        />
        <Image
          src="/school.jpeg"
          alt="School"
          width={200}
          height={200}
          className="object-cover rounded-lg"
        />
      </div>
      <button
        onClick={() => window.close()}
        className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
      >
        Chalo byeeee 👋
      </button>
      <p>waise i have never seen a girl as sundar as uuuuuu 😊</p>
    </div>
  );
}
