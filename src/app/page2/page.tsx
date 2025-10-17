"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-4 bg-white overflow-y-auto">
      <div className="w-full flex flex-col items-center space-y-2 mb-6">
        <Image
          src="/modi.jpeg"
          alt="Top Image"
          width={200}
          height={200}
          className="rounded-2xl object-cover"
        />
        <p className="text-base font-semibold mt-1">us when?</p>
      </div>

      <div className="bg-gray-100 rounded-2xl p-6 w-full max-w-xs space-y-2 text-gray-900">
        <p>Will act silly just to make u smile,</p>
        <p>Never leaving whatever u do 👎 — that’s my style.</p>
        <p>Always there to listen when u sed “bs mere upar mt nikala karo,”</p>
        <p>Even when u mad, I’ll still be like “ok bro 😭.”</p>

        <p>Dying to meet u irl since the day I saw u in sareeee,</p>
        <p>Bro that vision still lives rent free.</p>
        <p>Those 19 pics u sent on a single day yaar,</p>
        <p>Had me grinning like a fool, u my piyaar.</p>

        <p>I know I’m acting like you’re about die 😂,</p>
        <p>But fr u my reason why.</p>
        <p>Always stay happy cutiepie, no study stress,</p>
        <p>Fuck CFA and all that mess.</p>

        <p>u r the only friend who truly cares,</p>
        <p>sharing and talking with u, nothing else compares.</p>

        <p>U r my 5 feet LeBron James, female Messi,</p>
        <p>No one else could ever impress me.</p>
        <p>Would do anything to get these days back,</p>
        <p>Coz with u, life never felt outta track.</p>

        <p className="italic text-gray-500 mt-2">
          (not even close to how good u write tho -- i tried 😂)
        </p>
      </div>

      <Link href="/page3">
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white text-base font-semibold rounded-2xl shadow-md hover:bg-pink-600 transition">
          Next
        </button>
      </Link>
    </div>
  );
}
